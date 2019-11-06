import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import { setVisibilityFilter } from "../actions";

let Link = ({ active, children, setFilter }) => {
  return (
    <Tooltip title={!active ? "" : "実行できません"}>
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
    </Tooltip>
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
