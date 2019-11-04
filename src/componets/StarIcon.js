import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import { connect } from "react-redux";

import { importantTodo } from "../actions";

class IconStar extends Component {
  render() {
    const { dispatch, todo } = this.props;
    let icon;
    if (todo.important) {
      icon = (
        <Tooltip title="重要を解除">
          <IconButton
            onClick={() => dispatch(importantTodo(todo.id))}
            color="primary"
          >
            <FontAwesomeIcon
              icon={["fas", "star"]}
              style={
                {
                  // marginLeft: '15px',
                  // color: 'teal',
                  // cursor: 'pointer'
                  // opacity: 0.8
                }
              }
            />
          </IconButton>
        </Tooltip>
      );
    } else {
      icon = (
        <Tooltip title="重要に設定">
          <IconButton
            onClick={() => {
              dispatch(importantTodo(todo.id));
            }}
            color="primary"
          >
            <FontAwesomeIcon icon={["far", "star"]} />
          </IconButton>
        </Tooltip>
      );
    }

    return <React.Fragment>{icon}</React.Fragment>;
  }
}

export default IconStar = connect()(IconStar);
