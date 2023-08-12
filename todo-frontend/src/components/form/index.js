import React from 'react'
import{FormContainer,Input,Button} from './styles.js'

function Form ({input,setInput}) {
  return (
   <FormContainer>
    <Input 
    value={input}
    type='text'
    role='input'
    onChange={(e)=>setInput(e.target.value)}
    />
    <Button type="submit">Add</Button>
   </FormContainer>
  )
}

export default Form
