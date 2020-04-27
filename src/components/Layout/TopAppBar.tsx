import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import LinkButton from "./LinkButton";
import useStylesBase from "../../styles/styles-base";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: "none"
    },
    logo: {
      marginRight: theme.spacing(3)
    },
    menuImage: {
      margin: "auto"
    },
    moreButton: {
      marginRight: -22
    }
  })
);

export default function TopAppBar() {
  const classes = useStyles();
  const classesBase = useStylesBase();

  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const contact = (
    <Grid item xs>
      <Grid container justify="flex-end">
        <IconButton color="primary" onClick={() => (window.location.href = "mailto:cruziana2000@aol.com")}>
          <EmailIcon />
        </IconButton>
      </Grid>
    </Grid>
  );

  const topAppBar = smAndDown ? (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <h6 className={classesBase.primaryText}>Black Mountains CBD</h6>
          </Grid>
          {contact}
        </Grid>
      </Toolbar>
    </AppBar>
  ) : (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container alignItems="center">
              <h6 className={classesBase.primaryText}>Black Mountains CBD</h6>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="center" wrap="nowrap">
              <LinkButton className={classesBase.button} to="/">
                Home
              </LinkButton>
              <LinkButton className={classesBase.button} to="/products">
                Products
              </LinkButton>
            </Grid>
          </Grid>
          {contact}
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return <div>{topAppBar}</div>;
}
