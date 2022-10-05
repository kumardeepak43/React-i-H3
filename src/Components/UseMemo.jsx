import React, {useState, useMemo} from 'react'

const UseMemo = () => {
    const [counter, setCounter] = useState(0);

    const memoHook = useMemo(function countMemo(){
        return counter+5;
    },[counter])

  return (
    <div>
    <h2>5. What is UseMemo Hook ?</h2>
    <p>The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</p>

    
    <button onClick={()=> setCounter(counter+10)}>increment</button> <br/>
    counter: {memoHook}
    </div>
  )
}

export default UseMemo;