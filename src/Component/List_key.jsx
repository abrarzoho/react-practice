import React from 'react'
import "./List_key.css"
function List_key() {
  const product = [
    { name: "iphone", price: 2000 },
    { name: "samsung", price: 3000 },
    { name: "oppo", price: 4000 },
  ]
  return (
    <div className='list-key'>
      <h1>product list</h1>
      <ul>
        {
          product.map((item) => {
            return <li key={item.name}>{item.name} {item.price}</li>
          })
        }
      </ul>
    </div>
  )
}

export default List_key
