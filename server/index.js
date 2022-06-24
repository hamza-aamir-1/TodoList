const express = require("express");
const mongoose = require("mongoose");
const TodoModel = require("./models/Todo")
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://root:root@cluster0.gh8v8b6.mongodb.net/todolist",
{
    useNewUrlParser: true,
});

app.get("/", async (req, res) => {
    const todos = new TodoModel({todoTitle: "dummy title", todoDate: 24});

    try{
        await todos.save();
        res.send("Todo Created Successfully");
    }
    catch (err) {
        console.log(err);
    }
})

app.listen(3001, () => {
    console.log("Server is running on port 3001...!");
});