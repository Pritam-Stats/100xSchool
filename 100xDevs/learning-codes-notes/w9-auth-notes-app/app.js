const express = require("express");
const app = express()
const jwt = require("jsonwebtoken")

// home page
const path = require("path")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/index.html'))
})


// let notes = [];
// to change the data structure to store the notes as well as the corresponding user
let notes = [{
        username: 'kirat',
        note: 'code karooo'
    },
    {
        username: "ipritam",
        note: "Code code"
    }

]

app.use(express.json());
app.post("/notes", (req, res) => {
    //check if they have sent the right header, extract who the user is
    const token = req.headers.token;
    if (!token) {
        res.status(404).send({
            message: "you are not logged in!"
        })
        return;
    }

    const decoded = jwt.verify(token, "secretcode");
    const username = decoded.username;

    if (!username) {
        res.status(406).json({
            message: "Malformed token"
        })
        return;
    }



    const note = req.body.note;
    notes.push({username, note});

    res.send({
        message: "Done: Note added"
    })

})




// get all notes
app.get("/getnotes", (req, res) => {

    //check the token in headers
    const token = req.headers.token;
    if (!token) {
        res.status(404).send({
            message: "you are not logged in!"
        })
        return;
    }

    const decoded = jwt.verify(token, "secretcode");
    const username = decoded.username;

    if (!username) {
        res.status(406).json({
            message: "Malformed token"
        })
        return;
    }

    //filter the note according to the user
    const usernotes = notes.filter(note => note.username === username)
    res.json({
        notes: usernotes
    })
})


let users = [{
        name: 'Harkirat',
        username: "kirat",
        password: 1234
    },
    {
        name: "Pritam",
        username: "ipritam",
        password: 123
    }



]  //array of objects {username: username, password: password}





app.get("/signuppage", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/signup.html"))
})


app.post("/signup", (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;
    // const name = req.body.name

    const { name, username, password } = req.body   //shorthand of the above

    //check username
    const usernameExist = users.find(user => user.username === username);

    if (usernameExist) {
        return res.status(409).json({
            message: "User with this username already exists, enter an unique username"
        })
    };

    //if it passed add to the users
    users.push({
        name: name,
        username: username,
        password: password
    });

    res.json({
        message: "Account created; You can signin now"
    })
});

app.get("/signinpage", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/signin.html"))
})


//signin
app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    //check credentials
    const verified = users.find(user => user.username === username && user.password === password);

    if (!verified) {
        return res.status(403).json({
            message: "wrong credentials"
        })
    };

    //json web token: for now let's assume this as a encryption (Though it's a wrong statement; jwt does something called digital signature)
    const token = jwt.sign({
        username: username
    }, 'secretcode')

    res.json({
        token: token
    })

    res.json({
        message : "you are in ",
        name: verified.name
    })

    

})

// sign up get back a 200 status code but sign in get back a jwt token



const server = app.listen(3000, () => {
    console.log("Server running on 3000")
});

// console.log(server);

app.use(express.static(path.join(__dirname, "frontend")));