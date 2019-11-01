import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tab from '@material-ui/core/Tab'

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import { setVisibilityFilter } from '../actions'

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(0.5),
//   }
// }))


let Link = ({ active, children, setFilter }) => {
  // const classes = useStyles()

  return (
    <Button

      color="primary"
      variant='outlined'
      // className={classes.button}
      disabled={active}
      onClick={() => {
        setFilter()
      }}
    >
      {children}
    </Button>
  )
}


// let Link = ({ active, children, setFilter }) => (
//   <Button
//     style={{
//       marginLeft: '5px'
//     }}
//     color="primary"
//     variant='outlined'
//     // className={classes.button}
//     disabled={active}
//     onClick={() => setFilter()}
//   >
//     {children}
//   </Button>
// )

const mapStateToProps = (state, ownProps) => {
  // visibilityFilterはどれか一つで現在表示中のもの以外をactiveにする
  console.log('ownProps')
  console.log(ownProps)
  console.log('state')
  console.log(state.visibilityFilter)
  return ({
    active: ownProps.filter === state.visibilityFilter
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default Link = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link)