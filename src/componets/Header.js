import React from 'react'
import { connect } from 'react-redux'

import TodoTextInput from './TodoTextInput'
import { addTodo } from '../actions'

let Header = ({ addTodo }) => (
  <header>
    <h1>todo_app</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder='タスクの追加'
    />
  </header>
)

// const mapTest = () => {
//   console.log('addTodo')
//   console.log(addTodo('aaaa'))
// }
// mapTest();

export default Header = connect(null, { addTodo })(Header)

