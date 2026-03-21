const express = require("express");
const jwt = require("jsonwebtoken");

let USER_ID = 3;
let ORGANIZATION_ID = 3;
let BOARD_ID = 3;
let ISSUE_ID = 3;

const USERS = [{
    id: 1,
    username: "harkirat", // uniquenss constraint
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
    admin: 1,
    members: [2]
}, {
    id: 2,
    title: "ramans org",
    description: "Experimenting",
    admin: 1,
    members: []
}];

const BORADS = [{
    id: 1,
    title: "100xschool website (frontend",
    organizationId: 1
}];

const ISSUES = [{
    id: 1,
    title: "Add dark mode",
    boardId: 1
}, {
    id: 2,
    title: "Allow admins to create more courses",
    boardId: 1
}];


const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
    res.send("Index route");
})


//create endpoints for users
app.use(express.json());
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find((user) => user.username === username);
    if (userExists) {
        return res.status(400).json({ error: "Username already exists" });
    }
    
    const newUser = { id: USERS.length + 1, username, password };
    USERS.push(newUser);
    res.status(201).send({
        message: "User created successfully",
        user: newUser.username
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find((user) => user.username === username);
    if (!userExists) {
        return res.status(400).json({ error: "User not found" });
    }

    if (userExists.password !== password) {
        return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: userExists.id }, "secretcode");
    res.status(200).json({ token });
});



app.post("/users", (req, res) => {

});

app.post("/organizations", (req, res) => {

});

app.post("/boards", (req, res) => {

});

app.post("/issues", (req, res) => {

});