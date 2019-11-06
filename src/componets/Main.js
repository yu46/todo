import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

import NewTodoList from "./NewTodoList";
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

export default connect(
  null,
  { addTodo }
)(Main);
