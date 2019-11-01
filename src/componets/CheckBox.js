import React from 'react'
import { connect } from 'react-redux'
import CheckBox from '@material-ui/core/CheckBox'


import { completeTodo } from '../actions'




let MaterialCheckBox = ({ dispatch, todo }) => (
  <CheckBox
    color="primary"
    onClick={() => dispatch(completeTodo(todo.id))}
  />
)

export default MaterialCheckBox = connect()(MaterialCheckBox)