import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(5);

    useEffect(() => {
        console.log("did mount");
        return () =>{
          console.log("like unmount");
        }
    },[])

    useEffect(() =>{
        console.log("did update",count);
    },[count])

  return (
    <div>
    <h2>3. What is useEffect Hook ?</h2>
    <p>The useEffect () method to replace class component lifecycles. useEffect Parameters useEffect hook takes a function as the first argument and a set of dependencies as the second argument. React.useEffect (function, [dependencies]).</p>
    
    <h2>{count}</h2>
    <button onClick={()=> setCount(count + 5)}> setCount </button>
    <hr/>
    </div>
  )
}

export default UseEffect;