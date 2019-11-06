import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import List from "@material-ui/core/List";

import * as TodoActions from "../actions";
import { VisibilityFilters } from "../actions";
import TodoItem from "./TodoItem";

let TodoList = ({ todos, actions }) => (
  <List disablePadding={true}>
    {todos
      .slice(0)
      .reverse()
      .map(todo => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
  </List>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_IMPORTANT:
      return todos.filter(t => t.important);
    default:
      throw new Error("error");
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
