import React, { Component } from 'react'
// import classnames from 'classnames'

export default class TodoTextInput extends Component {

  state = {
    text: this.props.text || ''
  }


  handleSubmit = e => {
    const text = e.target.value.trim()
    console.log(text)
    // e.which ===13 はエンターキーを押したら。e.key === 'Enter'
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }


  render() {
    return (
      // <input className={
      //   classnames({
      //     edit: this.props.editing
      //   })
      // }
      <input
        type="text"
        autoFocus={true}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        onBlur={this.handleBlur}
      />
    )
  }


}