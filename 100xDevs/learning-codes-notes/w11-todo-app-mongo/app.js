const express = require("express");

const app = express()
require("dotenv").config();
const bcrypt = require("bcrypt")

const { todoModel, userModel } = require("./models")

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const { authMiddleware } = require("./middleware")
app.use(express.json())

//endpoints

app.post("/signup", async (req, res) => {
    const { name, username, password } = req.body;
    // const existingUser = USERS.find(u => u.username === username);
    const existingUser = await userModel.findOne({
        username: username,
    })    //returns a promise

    if (existingUser){
        return res.status(409).json({
            message: "Conflict: The username already exist"
        })
    }

    
    const hashedPass = await bcrypt.hash(password.toString(), 10)
    // USERS.push({name, username, password, id: currUserId})

    const newUser = await userModel.create({
        name: name,
        username: username,
        password: hashedPass
    })


    res.status(201).json({
        message: `Account Created ${name}. You can login now`,
        id: newUser._id
    })
})


app.post("/signin", async (req, res) => {

    try {
        const { username, password } = req.body;
        // const user = USERS.find(u => u.username === username)
        const user = await userModel.findOne({
            username: username
        })

        if (!user) {
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }

        const passVerified = await bcrypt.compare(password.toString(), user.password)

        if (!passVerified) {
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        };

        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username
            },
            JWT_SECRET,
            { expiresIn: "2h" }
        )

        res.status(200).json(
            {
                message: `Welcome Back ${user.name}`,
                token: token
            }
        )
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

})

//create todo - // authenticated so we need a middleware

app.post("/todos", authMiddleware, (req, res) => {
    const userId = req.userId;

    const { title, description } = req.body;

    TODOS.push({
        id: currTodoId,
        title,
        description,
        userId
    });
    currTodoId++;
    res.status(200).json({
        message: "Todo added"
    })


})


app.get("/todos", authMiddleware, (req, res) => {
    const userId = req.userId;
    const userTodos = TODOS.filter(t => t.userId === userId);

    res.json({
        todos: userTodos
    })
})



app.delete("/todos/:id", authMiddleware, (req, res) => {
    const userId = req.userId;

    const todoId = parseInt(req.params.id);

    const todo = TODOS.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        })
    }

    if (todo.userId !== userId) {
        return res.status(403).json({
            message: "Forbidden : You are not allowed to delete"
        })
    }
      
    TODOS = TODOS.filter(t=> t.id !== todoId)
    res.json({
            message: "Todo deleted"
        });
})


app.listen(3000, () => {
    console.log("Running on 3000")
})

