const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    todoTitle: {
        type: String,
        required: true,
    },
    todoDate: {
        type: Number,
        required: true,
    },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;