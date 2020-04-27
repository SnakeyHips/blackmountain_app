import React from "react";
import useStylesBase from "../../styles/styles-base";

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  const classesBase = useStylesBase();

  return (
    <div className={classesBase.root}>
      <main className={classesBase.content}>{props.children}</main>
    </div>
  );
}
