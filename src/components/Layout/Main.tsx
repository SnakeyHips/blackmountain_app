import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";
import useStylesBase from "../../styles/styles-base";

const useStyles = makeStyles({
  content: {
    flexGrow: 1
  }
});

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const bottomNav = smAndDown ? <BottomNav /> : undefined;

  return (
    <div className={classesBase.root}>
      <TopAppBar />
      <main className={classes.content}>{props.children}</main>
      {bottomNav}
    </div>
  );
}
