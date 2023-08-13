const mongoose = require("mongoose");

const Todos = require("../dBTodos");

//getTodo
const getTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find({}).sort({ createdAt: -1 });
    res.status(200).send(allTodos);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// create a new Todo
const createTodos = async (req, res) => {
  const dbTodo = req.body;
  try {
    const newTodo = await Todos.create(dbTodo);
    res.status(200).send(newTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//update Todo
const updateTodos = async (req, res) => {
  const { id } = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send(`There is no todo with ID of ${id}`);
    }
    const todoID = { _id: id };
    const update = { completed: true };

    const updateTodo = await Todos.findOneAndUpdate(todoID, update);
    
    if(!updateTodo){
        return res.status(400).send(`There is no todo with ID of ${id}`);
    }
    
    res.status(200).send(updateTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
//delte Todo
const deleteTodos = async (req, res) => {
  const { id } = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send(`There is no todo with ID of ${id}`);
    }
    const todoID = { _id: id };
  

    const deleteTodo = await Todos.findOneAndDelete(todoID);
    
  
    
    res.status(200).send(deleteTodoTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getTodos,
  createTodos,
  updateTodos,
  deleteTodos,
};
