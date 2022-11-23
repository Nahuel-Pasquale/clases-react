import React from "react";
import { LinkButtonStyled } from "../navbar/NavbarStyles";

export const LinkItem = (props) => {
  return <LinkButtonStyled to={props.to}>{props.children}</LinkButtonStyled>;
};
