import React from 'react'
import { connect } from 'react-redux'

// material-Ui
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import FilledInput from '@material-ui/core/FilledInput'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import TodoTextInput from './TodoTextInput'
import { addTodo } from '../actions'

let Header = ({ addTodo }) => (
  <header>
    <Grid container>
      <Grid item sm={12}>
        <h1
          style={{
            fontSize: '45px',
            color: '#3a4d55',//#3a4d55 '#546e7a'
            textAlign: 'center'
          }}
        >TODO</h1>
      </Grid>
      {/* <Grid item> */}
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            addTodo(text)
          }
        }}
        placeholder='タスクの追加'
      />
      
    </Grid>
  </header>
)

// const mapTest = () => {
//   console.log('addTodo')
//   console.log(addTodo('aaaa'))
// }
// mapTest();

export default Header = connect(null, { addTodo })(Header)

