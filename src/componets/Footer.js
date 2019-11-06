import React from "react";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Link from "./Link";
import { VisibilityFilters } from "../actions/";

const Footer = () => {
  return (
    <AppBar
      style={{
        top: "auto",
        bottom: 0
      }}
      color="primary"
      position="fixed"
    >
      <Toolbar alignitems="center">
        <Grid container justify="center" spacing={2}>
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
