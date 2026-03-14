const express = require("express");
const app = express()

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

app.listen(3000, ()=>{
    console.log("Server running on 3000")
})