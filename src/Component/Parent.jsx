import React from 'react'
import Child from './Child'
import "./Parent.css"
function Parent() {
    const[message,setmessage]=React.useState('hello from parent component')
    function UpdateMessage(){
        setmessage('hello from child component')
    }
  return (
    <div className='card'>
      <h1>{message}</h1>
      <Child UpdateMessage={UpdateMessage}/>
    </div>
  )
}

export default Parent
