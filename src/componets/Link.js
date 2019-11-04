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
          // className={classes.button}
          disabled={active}
          onClick={() => {
            setFilter();
          }}
          style={{
            backgroundColor: "#fafafa"
            // color: "#fafafa"
          }}
          //   primary: {
          //     main: "#546e7a",
          // dark: "#29434e",
          //   light: "#819ca9"
        >
          {children}
        </Button>
      </span>
    </Tooltip>
  );
};

const mapStateToProps = (state, ownProps) => {
  // visibilityFilterはどれか一つで現在表示中のもの以外をactiveにする
  // console.log("ownProps");
  // console.log(ownProps);
  // console.log("state");
  // console.log(state.visibilityFilter);
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
