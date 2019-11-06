import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";
import App from "./componets/App";

import { addTodo } from "./actions";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addTodo("こんにちは,世界!"));
store.dispatch(addTodo("Hello Redux!"));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

console.log(store.getState());
