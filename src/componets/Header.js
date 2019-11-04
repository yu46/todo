import React from "react";
import { connect } from "react-redux";

// material-Ui

import Grid from "@material-ui/core/Grid";

import TodoTextInput from "./TodoTextInput";
import { addTodo } from "../actions";

let Header = ({ addTodo }) => (
  <header>
    <Grid container>
      <Grid item sm={12}>
        <h1
          style={{
            fontSize: "45px",
            color: "#3a4d55", //#3a4d55 '#546e7a'
            textAlign: "center"
          }}
        >
          TODO
        </h1>
      </Grid>
      {/* <Grid item> */}
      <TodoTextInput
        newTodo
        onSave={text => {
          if (text.length !== 0) {
            addTodo(text);
          }
        }}
        placeholder="タスクの追加"
      />
    </Grid>
  </header>
);

export default Header = connect(
  null,
  { addTodo }
)(Header);
