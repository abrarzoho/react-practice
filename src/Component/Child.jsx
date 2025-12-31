import React from 'react'
import Parent from './Parent'

function Child(props) {

  return (
    <div>
      <button onClick={props.UpdateMessage}>update message</button>
    </div>
  )
}

export default Child
