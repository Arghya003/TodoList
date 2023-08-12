const express = require("express")
const mongoose = require("mongoose")
const cors= require("cors")
const dotenv= require("dotenv")


dotenv.config();

const {
  getTodos,createTodos,updateTodos,deleteTodos
}= require('./controllers/TodoController.js')


const app = express();
const port = process.env.PORT || 5000;


const connectionURL=process.env.MONGO_URI;
//middleware
//CONVERT TO JSON
app.use(express.json());

app.use(cors())


//Db Config

mongoose
  .connect(connectionURL, {
   // useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`listening to port${port}`));
  })
  .catch((err) => {
    console.log(err);
  });



//api Endpoints

//get the todo list
app.get("/todos", getTodos)



// create a todolist
app.post("/todos", createTodos);


// update a todo
app.put("/todos/:id", updateTodos);


// delete a todo
app.delete("/todos/:id", deleteTodos);
