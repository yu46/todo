import React from "react";
import { connect } from "react-redux";

import NewTodoList from "./NewTodoList";
// material-Ui
// import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import TodoTextInput from "./TodoTextInput";
import { addTodo } from "../actions";

let Main = ({ addTodo }) => (
  <header>
    <Paper>
      <TodoTextInput
        newTodo
        onSave={text => {
          if (text.length !== 0) {
            addTodo(text);
          }
        }}
        placeholder="タスクの追加"
      />

      <NewTodoList />
    </Paper>
  </header>
);

// const mapTest = () => {
//   console.log('addTodo')
//   console.log(addTodo('aaaa'))
// }
// mapTest();

export default connect(
  null,
  { addTodo }
)(Main);
