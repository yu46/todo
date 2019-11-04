import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  IMPORTANT_TODO
} from "../constants/ActionTypes";

// import undoable from 'redux-undo'
const initialState = [
  {
    id: 0,
    text: "hello world!",
    completed: false,
    important: false,
    onDialog: true
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          important: false,
          onDialog: true
        }
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            id: action.id,
            text: action.text
          };
        } else {
          return todo;
        }
      });

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case IMPORTANT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, important: !todo.important } : todo
      );

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

// const undoableTodos = undoable(todos)

export default todos;
// export default undoableTodos
