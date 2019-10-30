import React from 'react'

const Todo = ({ onClick, completed, text }) => {


  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )
}

export const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}

    >X</button>
  )
}


export default Todo