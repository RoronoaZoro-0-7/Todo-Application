import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/todo");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("apps", todoSchema);

export default todo;