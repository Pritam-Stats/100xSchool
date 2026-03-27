const express = require("express");
const jwt = require("jsonwebtoken");

const { randomUUID } = require("crypto");
require("dotenv").config()

const jwt_secret = process.env.JWT_SECRET;

const { authMiddleWareVerify } = require("./middleware")

let USER_ID = 2;
let ORGANIZATION_ID = 2;
let BOARD_ID = 2;
let ISSUE_ID = 2;

const USERS = [{
    id: 1,
    username: "harkirat", // uniqueness constraint
    password: "123123"
}, {
    id: 2,
    username: "pritam",
    password: "123123"
}];

const ORGANIZATIONS = [{
    id: 1,
    title: "100xdevs",
    description: "Learning coding platform",
    admin: 1,   //id
    members: new Set()    //in terms of ids, who will get the access
}, {
    id: 2,
    title: "pritam's org",
    description: "Experimenting",
    admin: 1,
    members: new Set()
}];

const BOARDS = [
    {
        id: 1,
        title: "100xdevs website (frontend",
        organizationId: 1
    },
    {
        id: 2,
        title: "100xdevs website (frontend",
        organizationId: 1
    },
];

const ISSUES = [{
    id: 1,
    title: "Add dark mode",
    boardId: 1
}, {
    id: 2,
    title: "Allow admins to create more courses",
    boardId: 1
}];


//init

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
    res.send("Landing Page");
})


//create endpoints for users
app.use(express.json());    //imp middlewares to read json 
app.post("/signup", (req, res) => {
    // const name = req.body.name;
    // const username = req.body.username;
    // const password = req.body.password;

    const {name, username, password} = req.body;

    const userExists = USERS.find((user) => user.username === username);
    
    if (userExists) {
        return res.status(400).json({ error: "Username already exists" });
    }
    USER_ID++
    const newUser = { id: USER_ID, name, username, password };
    USERS.push(newUser);
    
    res.status(201).json({
        message: "User created successfully",
        user: newUser.username,
        userID: newUser.id
    });
});


app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find((user) => user.username === username);
    if (!userExists) {
        return res.status(400).json({ error: "User not found!! Signup first" });
    }

    if (userExists.password !== password) {
        return res.status(400).json({ error: "Wrong password" });
    }

    const token = jwt.sign(
        {
            username: username,
            id: userExists.id,
            jti: randomUUID(),
        },
        jwt_secret,
        {
            expiresIn: "2h"
        }
    );
    res.status(200).json({ 
        token : token,
        name: userExists.name,
        message: "Welcome Back "
     });
});



app.post("/users", (req, res) => {

});

//authenticated endpoint -- so we need a middleware to verify the token
app.post("/organizations", authMiddleWareVerify, (req, res) => {
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByaXRhbTEyMyIsImlkIjozLCJqdGkiOiJjYTEzNWU1Ny0wNTEyLTQ4ODYtYjA1NS1hYjc5MDkyMDdhMDMiLCJpYXQiOjE3NzQ2MDYxMjksImV4cCI6MTc3NDYxMzMyOX0.WAFkheYnw3IsD8iMBGtVxnu94j7W5okLzp8XXYFnWxE

    const userid = req.userid;
    ORGANIZATIONS.push({
        id: ORGANIZATION_ID++,
        title: req.body.title,
        description: req.body.description,
        admin: userid,
        members: new Set()
    });

    res.json({
        message: "org added",
        id: ORGANIZATION_ID - 1
    })

});


app.post("/add-member-to-org", authMiddleWareVerify, (req, res) => {
    const userid = req.userid;
    const orgid = req.body.organizationId;
    const newUser = req.body.newusername;

    const org = ORGANIZATIONS.find(org => org.id === orgid);

    if (!org) {
        res.status(400).json({
            message: "Organization not found"
        })
        return
    }

    if (org.admin !== userid) {
        res.status(411).json({
            message: "you are not an admin of this org"
        })
        return
    }

    const memberUser = USERS.find(u => u.username === newUser);

    if (!memberUser) {
        return res.status(411).json({
            message: "No user with this username found"
        })
    };

    //check if the user already a member
    if (org.members.has(memberUser.id)){
        return res.status(403).json({
            message: "user already in the member"
        })
    }

    org.members.add(memberUser.id);

    res.json({
        message: "new member added"
    })

})


app.delete("/members", authMiddleWareVerify, (req, res) => {
    const userid = req.userid;
    const orgid = req.body.organizationId;
    const newUser = req.body.newusername;

    const org = ORGANIZATIONS.find(org => org.id === orgid);

    if (!org) {
        res.status(400).json({
            message: "Organization not found"
        })
        return
    }

    if (ORGANIZATIONS.admin !== userid) {
        res.status(411).json({
            message: "you are not an admin of this org"
        })
        return
    }

    const memberUser = USERS.find(u => u.username === newUser);

    if (!memberUser) {
        return res.status(411).json({
            message: "No user with this username found"
        })
    };

    //check if the user already a member
    if (!ORGANIZATIONS.members.has(memberUser.id)) {
        return res.status(403).json({
            message: "user not in the members list"
        })
    }

    ORGANIZATIONS.members.delete(memberUser.id)
    res.json({
        message: "user removed"
    })

})


app.get("/organizations", authMiddleWareVerify, (req, res) => {
    const userid = req.userid;
    const orgid = parseInt(req.query.organizationId);

    const org = ORGANIZATIONS.find(org => org.id === orgid);

    if (!org || org.admin !== userid){
        res.status(403).json({
            message: "Org doesn't exist or you are not the admin"
        })
        return
    };

    res.json({
        org: {
            ...org,
            members: [...org.members].map(memberID => {
                const user = USERS.find(user => user.id === memberID);
                return user 
                ? { id: user.id, username: user.username }
                : null;
            })
        }
    })

})


app.post("/boards", (req, res) => {

});

app.post("/issues", (req, res) => {

});


//get endpoints
app.get("/boards", (req, res) => {

});


app.get("/issues", (req, res) => {

})


app.get("/members", (req, res) => {

})


//update
app.put("/issues", (req, res) => {

})



//structure routes, so first thing to design the routes