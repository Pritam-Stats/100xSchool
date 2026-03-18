const express = require("express");
const app = express()
const jwt = require("jsonwebtoken")

// home page
const path = require("path")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/index.html'))
})


let notes = [];

app.use(express.json());
app.post("/notes", (req, res) => {
    const note = req.body.note;
    notes.push(note);

    res.send({
        message: "Done: Note added"
    })

})



// get all notes
app.get("/getnotes", (req, res) => {
    res.send(res.json({
        notes
    }))
})


let users = []  //array of objects {username: username, password: password}

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

    const name = 
    res.json({
        message : "you are in ",
        name: verified.name
    })


})





app.listen(3000, ()=>{
    console.log("Server running on 3000")
})