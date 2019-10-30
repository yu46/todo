import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import classnames from 'classnames'

import CheckBox from './CheckBox'
import IconStar from './IconStar'
import TodoTextInput from './TodoTextInput'


export default class TodoItem extends Component {

  state = {
    editing: false,
    importance: false
  }

  handleEditOrDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }


  // toggleImportance = () => {
  //   this.setState({ importance: !this.state.importance })
  // }

  render() {
    const { todo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      )
    } else {
      element = (
        <div>
          {/* チェックボックス */}
          <CheckBox
            todo={todo}
          />
          <label onDoubleClick={this.handleEditOrDoubleClick} >
            {todo.text}
          </label>

          {/* エディトアイコン */}
          <FontAwesomeIcon
            onClick={this.handleEditOrDoubleClick}
            icon={['fas', 'pen']}
            style={{
              marginLeft: '90px',
              color: 'teal',
              opacity: 0.9,
              cursor: 'pointer'
            }}
          />

          {/* 星アイコン */}
          <IconStar
            todo={todo}
          />

          {/* 削除アイコン */}
          <FontAwesomeIcon
            onClick={() => deleteTodo(todo.id)}
            icon={['fas', 'trash-alt']}
            style={{
              marginLeft: '15px',
              color: 'teal',
              opacity: 0.9,
              cursor: 'pointer'
            }}
          />
        </div >
      )
    }

    return (
      // <li className={
      //   classnames({
      //     editing: this.state.editing
      //   })
      // }>
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {element}
      </li >
    )
  }
}

