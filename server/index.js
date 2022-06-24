const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const TodoModel = require("./models/Todo")
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://root:root@cluster0.gh8v8b6.mongodb.net/todolist",
{
    useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {
    const todoTitle = req.body.todoTitle;
    const todos = new TodoModel({todoTitle: todoTitle, todoDate: 24});

    try{
        await todos.save();
        res.send("Todo Created Successfully");
    }
    catch (err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    TodoModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001...!");
});