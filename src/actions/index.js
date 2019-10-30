import * as types from '../constants/ActionTypes'


let nextTodoId = 1

export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
})

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text
})

export const completeTodo = (id) => ({
  type: types.COMPLETE_TODO,
  id,
})

export const importantTodo = (id) => ({
  type: types.IMPORTANT_TODO,
  id
})

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})



export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_IMPORTANT: 'SHOW_IMPORTANT',
}

// 多分使っていない下記
export const toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}