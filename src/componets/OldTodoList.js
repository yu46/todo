import React from 'react'
import { connect } from 'react-redux'

import Todo, { DeleteButton } from './Todo'
import { toggleTodo, deleteTodo, editTodo } from '../actions'

const TodoList = ({ todos, onTodoClick, onEditTodo, onDeleteButtonClick, test }) => {
  console.log("TodoList.js:props?")
  console.log(todos)
  // const TodoList = (props) => {
  return (
    <ul>
      {todos.map((todo) =>
        <React.Fragment>
          <Todo
            key={todo.id}
            // id={todo.id}
            // text={todo.text}
            {...todo}
          // onClick={() => onTodoClick(todo.id)}
          // onClick={() => onEditTodo(todo.id, todo.text)}
          />
          <DeleteButton
            onClick={() => onDeleteButtonClick(todo.id)}

          />
        </React.Fragment>
      )}
    </ul>
  )
}

const mapStateToProps = (state) => {
  // console.log(...state)
  return { todos: state }
}

const mapDispatchToprops = (dispatch) => {

  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // },
    onDeleteButtonClick: id => {
      dispatch(deleteTodo(id))
    },
    onEditTodo: (id, text) => {
      dispatch(editTodo(id, text))
    }
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToprops
)(TodoList)

export default VisibleTodoList

