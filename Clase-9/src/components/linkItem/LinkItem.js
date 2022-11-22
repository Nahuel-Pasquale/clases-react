import React from "react";
import { LinkButtonStyled } from "../navbar/NavbarStyles";

export const LinkItem = (props) => {
  /*** Se debe cambiar desde los estilos el a de 
  LinkButtonStyled por un NavLink de ReactRouter ***/

  return <LinkButtonStyled to={props.to}>{props.children}</LinkButtonStyled>;
};
