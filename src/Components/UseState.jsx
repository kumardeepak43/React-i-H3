import React, { useState } from 'react'

const UseState = () => {

  const [state, setState] = useState("Jdk");
  
  return (
    <div>
   <h2>2. What is UseState Hook ?</h2>
    <p>The useState () is a Hook that allows you to have state variables in functional components. <br/>
    The first element is the initial state and the second one is a function that is used for updating the state.<br/> </p>
    <b>syntax:</b>  &nbsp; <font style={{fontSize: "18px"}}>const [state, setState] = useState(initialstate)</font>
    
    <h2>{state}</h2>
    <button onClick={()=> setState("Loren")}>setState</button>
 
    <hr/>
    </div>
  )
}

export default UseState;