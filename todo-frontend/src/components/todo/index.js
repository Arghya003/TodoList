import React, { useState } from 'react'
import { Container } from './styles';
import Form from "../form"






  

function Todo() {
  const [input, setInput] = useState("");
  console.log(input,"input")
  return (
    <Container>
      <h3>Work Left</h3>
      {/* Form*/}
      <Form input={input} setInput={setInput}/>
      {/* Todo List*/}
      {/* Key*/}
      {/* Author*/}
    </Container>
  );
}

export default Todo;
