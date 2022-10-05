import React, { useReducer } from 'react'

function UseReducer(){
const initialState = 0;
const reducer = (state, action) =>  {
    switch (action) {
        case 'increment' : 
            return  state + 1;
        case 'decrement' : 
            return state - 1;
        default : 
              return 0;
    }
}


    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
    <h2>4. What is UseReducer Hook ?</h2>
   <p>use to store state values to local const variable.</p>
  <p>
  Syntax: 
  The useReducer Hook accepts two arguments.
  
  useReducer(reducer, initialState)
  
  The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
  </p>

  <h2>{state}</h2>
  <button onClick={() => dispatch("increment")}> + </button>
  <button onClick={() => dispatch("decrement")}> - </button>

    <hr/>
    </div>
  )
}

export default UseReducer;