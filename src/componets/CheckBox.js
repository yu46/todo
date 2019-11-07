import React from "react";
import { connect } from "react-redux";

import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";

import { completeTodo } from "../actions";

const MuiCheckBox = ({ dispatch, todo }) => {
  if (todo.completed) {
    return (
      <Tooltip title="完了を取り消す">
        <Checkbox
          color="primary"
          onClick={() => dispatch(completeTodo(todo.id))}
        />
      </Tooltip>
    );
  } else {
    return (
      <Tooltip title="完了にする">
        <Checkbox
          color="primary"
          onClick={() => dispatch(completeTodo(todo.id))}
        />
      </Tooltip>
    );
  }
};

export default connect()(MuiCheckBox);
