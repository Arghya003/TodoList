const mongoose = require("mongoose");

const Todos= require("../dBTodos")


//getTodo
const getTodos= async(req,res)=>{
    try{
        const allTodos= await Todos.find({}).sort({createdAt:-1})
        res.status(200).send(allTodos)
    }
    catch(err){
        res.status(400).send(err.message)
    }
}


// create a new Todo
const createTodos = async (req, res) => {};

const updateTodos = async (req, res) => {};

const deleteTodos = async (req, res) => {};

module.exports = {
  getTodos,
  createTodos,
  updateTodos,
  deleteTodos,
};