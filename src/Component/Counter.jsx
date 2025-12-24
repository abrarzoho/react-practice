import React, { useState } from 'react'
import './Counter.css'
function Counter() {
  const [count,setCount]=React.useState(0)
  function increment(){
          setCount(count+1)
      }
  function decrement()
  {
      setCount(count-1)
  }
  return (
    <div className='counter'>
      <h3>Conter Component</h3>
      <button onClick={increment} className='btn-count'><p>+</p></button>
      <button onClick={decrement} className='btn-counnt'><p>-</p></button>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter
