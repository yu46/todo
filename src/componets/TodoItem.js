import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";

import MyCheckBox from "./CheckBox";
import StarIcon from "./StarIcon";
import TodoTextInput from "./TodoTextInput";
import DeleteIcon from "./DeleteIcon";
import SimpleMenu from "./Menu";

export default class TodoItem extends Component {
  state = {
    editing: false,
    anchorEl: null
  };

  handleEditOrDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  };

  // menuEvent
  // handleClickMenu = e => {
  //   console.log(e.cuurentTarget);
  //   this.setState({ anchorEl: e.cuurentTarget });
  // };

  // handleCloseMenu = () => {
  //   this.setState({ anchorEl: null });
  // };

  render() {
    const { todo } = this.props;
    let element;
    if (this.state.editing && !todo.completed) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <React.Fragment>
          {/* チェックボックス */}
          <MyCheckBox color="primary" todo={todo} />

          {/* TODOテキスト */}
          <label onDoubleClick={this.handleEditOrDoubleClick}>
            {todo.text}
          </label>

          <ListItemSecondaryAction>
            <Hidden smUp>
              <SimpleMenu
                onClickEdit={this.handleEditOrDoubleClick}
                todo={todo}
              />
            </Hidden>

            {/* スマホ用 アイコンを隠す */}
            <Hidden xsDown implementation="css">
              {/* エディトアイコン */}
              <Tooltip
                title={todo.completed ? "編集できません" : "編集"}
                style={{
                  disabled: todo.completed || false
                }}
              >
                <IconButton
                  onClick={this.handleEditOrDoubleClick}
                  color="primary"
                >
                  <FontAwesomeIcon icon={["fas", "pen"]} />
                </IconButton>
              </Tooltip>
              {/* 星アイコン */}
              <StarIcon todo={todo} />

              {/* 削除アイコン */}
              <DeleteIcon todo={todo} />
            </Hidden>
          </ListItemSecondaryAction>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <ListItem>
          <ListItemText
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
            {element}
          </ListItemText>
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
}
