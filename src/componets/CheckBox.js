import React from "react";
import { connect } from "react-redux";

import CheckBox from "@material-ui/core/CheckBox";
import Tooltip from "@material-ui/core/Tooltip";

import { completeTodo } from "../actions";

let MaterialCheckBox = ({ dispatch, todo }) => {
  if (todo.completed) {
    return (
      <Tooltip title="完了を取り消す">
        <CheckBox
          color="primary"
          onClick={() => dispatch(completeTodo(todo.id))}
        />
      </Tooltip>
    );
  } else {
    return (
      <Tooltip title="完了にする">
        <CheckBox
          color="primary"
          onClick={() => dispatch(completeTodo(todo.id))}
        />
      </Tooltip>
    );
  }
};

export default MaterialCheckBox = connect()(MaterialCheckBox);
