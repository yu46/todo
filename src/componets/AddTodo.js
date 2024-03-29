import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <input
        ref={(node) => { input = node }}
      />
      <button onClick={() => {
        dispatch(addTodo(input.value))
        console.log('dispatch')
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo