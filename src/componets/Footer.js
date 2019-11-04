import React from "react";

// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Link from "./Link";
import { VisibilityFilters } from "../actions/";

const Footer = () => {
  return (
    // <React.Fragment>
    // {/* <Grid container justify="center"> */}
    <AppBar
      style={{
        top: "auto",
        bottom: 0
        // height: "12vh"
      }}
      color="primary"
      position="fixed"
    >
      <Toolbar alignitems="center">
        <Grid container justify="center" spacing={2}>
          {/* <Paper> */}
          <Grid item>
            <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
          </Grid>
          <Grid item>
            <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
          </Grid>
          <Grid item>
            <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
          </Grid>
          <Grid item>
            <Link filter={VisibilityFilters.SHOW_IMPORTANT}>important</Link>
          </Grid>
          {/* </Paper> */}
        </Grid>
      </Toolbar>
    </AppBar>
    // {/* </Grid> */}
    // {/* </React.Fragment> */}
  );
};

export default Footer;
