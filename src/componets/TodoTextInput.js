import React, { Component } from "react";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

export default class TodoTextInput extends Component {
  state = {
    text: this.props.text || ""
  };

  handleSubmit = e => {
    const text = e.target.value.trim();
    console.log(text);
    // e.which ===13 はエンターキーを押したかどうかの判断
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: "" });
      }
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  };

  render() {
    return (
      <OutlinedInput
        fullWidth
        startAdornment={<InputAdornment position="start">+</InputAdornment>}
        labelWidth={0}
        autoFocus={true}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        onBlur={this.handleBlur}
        style={{
          fontSize: "20px"
        }}
      />
    );
  }
}
