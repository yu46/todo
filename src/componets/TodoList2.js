import React from 'react'
import { connect } from 'react-redux'

import * as TodoActions from '../actions'
import { VisibilityFilters } from '../actions'
import TodoItem from './TodoItem'
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.6/node_modules/redux'
// import { deleteTodo, editTodo } from '../actions'

let TodoList = ({ todos, actions }) => (
  <ul
    style={{
      listStyle: 'none'
    }}
  >
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        todo={todo}
        {...actions}
      />
    )}
  </ul>
)


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case VisibilityFilters.SHOW_IMPORTANT:
      return todos.filter(t => t.important)
    default:
      throw new Error('error')
  }
}



const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})
// const mapDispatchToProps = dispatch => ({
//   onDeleteButtonClick: (id) => dispatch(deleteTodo(id))
// })

export default TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)