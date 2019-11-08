import * as types from "../constants/ActionTypes";

// firebaseの写経しようとしたが、どうしようかと、、、
// import { firebaseDb } from '../firebase/'
// const ref firebaseDb.ref('todos')

// export default loadTodos = dispatch => {
//   ref.off()

//   ref.on('value',
//     (snapshot) => { dispatch(loadTodoSuccess(snapshot)) },
//     (error) => {dispatch(loadTodoError(error))}
//   )
//   }

// export default loadTodoSuccess = (snapshot) =>({
//   type: 'TODOS_RECEIVE_DATA',
//   data: snapshot.val()
// })

// export default loadTodoError = (error) => ({
//   type: 'TODOS_RECIVE_ERROR',
//   message: error.message
// })

// let nextTodoId = 1;

// export const addTodo = text => {
//   return  dispatch => {
//   ref.push({
//     text,
//   })
//     .catch(error => dispatch({
//       type: 'ADD_TASK_ERROR',
//       message: error.message,
//   }))
//   }
// }

// export default updateTodo = (text) => {
//   return (dispatch, getState) => {
//     let state = getState()
//     let todo = state.todos.filter(todo => todo.text === text)

//     firebaseDb.ref(`todos/${text}`).update({ completed: !todo[0].completed })
//       .catch(error => dispatch({
//         type: 'UPDATE_TASK_ERROR',
//         message: error.message
//     }))
//   }
// }

// firebase before

let nextTodoId = 1;

export const addTodo = text => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
});

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text
});

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id
});

export const importantTodo = id => ({
  type: types.IMPORTANT_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_IMPORTANT: "SHOW_IMPORTANT"
};
