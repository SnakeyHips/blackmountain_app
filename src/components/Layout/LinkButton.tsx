import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface LinkButtonProps {
  to: string;
  className?: string;
  children: string;
}

export default function LinkButton(props: LinkButtonProps) {
  const { to, className, children } = props;

  return (
    <Button className={className} color="primary" component={Link} to={to}>
      {children}
    </Button>
  );
}
