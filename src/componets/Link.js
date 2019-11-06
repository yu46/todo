import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

import { setVisibilityFilter } from "../actions";

let Link = ({ active, children, setFilter }) => {
  return (
    <React.Fragment>
      <span>
        <Button
          color="primary"
          variant="outlined"
          disabled={active}
          onClick={() => {
            setFilter();
          }}
          style={{
            backgroundColor: "#fafafa"
          }}
        >
          {children}
        </Button>
      </span>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default Link = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
