import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';

// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import Icon from '@material-ui/core/Icon'
// import CheckBox from '@material-ui/core/CheckBox'
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
            color="primary"
            todo={todo}
          />
          <label
            onDoubleClick={this.handleEditOrDoubleClick} >
            {todo.text}
          </label>

          <ListItemSecondaryAction >
            {/* エディトアイコン */}
            <IconButton
              color="primary"
            >
              <FontAwesomeIcon
                onClick={this.handleEditOrDoubleClick}
                icon={['fas', 'pen']}
              // style={{
              //   color: 'teal',
              //   opacity: 0.9,
              // }}
              />
            </IconButton>

            {/* 星アイコン */}
            <IconButton
              color="primary"
            >
              <IconStar
                todo={todo}
              />
            </IconButton>
            {/* 削除アイコン */}

            <IconButton
              // <ListItemIcon

              aria-label="delete"
              color="primary"
              onClick={() => deleteTodo(todo.id)}
            >
              <FontAwesomeIcon
                icon={['fas', 'trash-alt']}
              />
            </IconButton>
          </ListItemSecondaryAction>
          {/* </ListItemIcon> */}



        </div >
      )
    }

    return (
      // <li className={
      //   classnames({
      //     editing: this.state.editing
      //   })
      // }>
      // <li
      //   style={{
      //     textDecoration: todo.completed ? 'line-through' : 'none'
      //   }}
      // >
      <React.Fragment>
        <ListItem>
          <ListItemText
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          // primary={element}
          >
            {element}
          </ListItemText>
        </ListItem>
        <Divider />
      </React.Fragment>
      // </li >
    )
  }
}

