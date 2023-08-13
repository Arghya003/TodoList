import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Form from "../form";
import axios from "../../axios";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(input, "input");

  const fetchData = async () => {
    try {
      const reponse = await axios.get("/todos");
      setTodos(reponse.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    console.log("added todos");
    e.preventDefault();
    if (input.length === 0) return null;
    await axios.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput('')
  };
  console.log(todos, "todos");

  return (
    <Container>
      <h3>Work Left</h3>
      {/* Form*/}
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      {/* Todo List*/}
      {/* Key*/}
      {/* Author*/}
    </Container>
  );
}

export default Todo;
