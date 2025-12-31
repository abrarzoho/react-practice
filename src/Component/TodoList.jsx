import React from 'react'
import './TodoList.css'
function TodoList() {
  const [todoInput, setTodoInput] = React.useState('')
  const [todos, setTodos] = React.useState([])

  function handleChange(e) {
    setTodoInput(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault()
    if (todoInput.trim() === "") return;

    setTodos([...todos, todoInput])
    setTodoInput('')
  }

  const deleteTask = (index) => {
    const newTasks = todos.filter((_, i) => i !== index)
    setTodos(newTasks)
  }

  return (
  <div className="todo-container">
    <h2>To-Do List</h2>

    <form className="todo-form" onSubmit={addTask}>
      <input
        type="text"
        value={todoInput}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
    </form>

    <ul className="todo-list">
      {todos.map((t, index) => (
        <li key={index}>
          {t}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

}

export default TodoList
