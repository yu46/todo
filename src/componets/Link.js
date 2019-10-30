import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../actions'

let Link = ({ active, children, setFilter }) => (
  <button
    style={{
      cursor: 'pointer',
      marginLeft: '4px'
    }}
    disabled={active}
    onClick={() => setFilter()}
  >
    {children}
  </button>
)

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