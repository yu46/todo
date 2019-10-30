import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { importantTodo } from '../actions'

class IconStar extends Component {

  render() {

    const { dispatch, todo } = this.props
    let icon
    if (todo.important) {
      icon = (
        <FontAwesomeIcon
          onClick={() =>
            dispatch(importantTodo(todo.id))
          }
          icon={['fas', 'star']}
          style={{
            marginLeft: '15px',
            color: 'teal',
            cursor: 'pointer'
            // opacity: 0.8
          }}
        />
      )
    } else {
      icon = (
        <FontAwesomeIcon
          onClick={() => {
            dispatch(importantTodo(todo.id))
          }}
          icon={['far', 'star']}
          style={{
            marginLeft: '15px',
            color: 'teal',
            cursor: 'pointer',
            opacity: 0.5
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

export default IconStar = connect()(IconStar)



