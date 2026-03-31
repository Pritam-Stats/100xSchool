const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
mongoose.connect(url)

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: mongoose.Types.ObjectId
})

const userModel = mongoose.model("users", userSchema)

const todoModel = mongoose.model("todos", todoSchema)

module.exports = {
    userModel: userModel,
    todoModel: todoModel
}