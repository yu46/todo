import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'


import { completeTodo } from '../actions'


class CheckBox extends Component {

  render() {

    const { dispatch, todo } = this.props
    let icon
    if (todo.completed) {
      icon = (
        <FontAwesomeIcon
          onClick={() =>
            dispatch(completeTodo(todo.id))
          }
          icon={['far', 'check-square']}
          style={{
            marginRight: '10px',
            color: 'teal',
            cursor: 'pointer',
          }}
        />
      )
    } else {
      icon = (
        <FontAwesomeIcon
          onClick={() =>
            dispatch(completeTodo(todo.id))
          }
          icon={['far', 'square']}
          style={{
            marginRight: '10px',
            color: 'teal',
            cursor: 'pointer',
          }}
        />
      )
    }

    return (
      <React.Fragment>
        {icon}
      </React.Fragment>
    )
  }
}

export default CheckBox = connect()(CheckBox)