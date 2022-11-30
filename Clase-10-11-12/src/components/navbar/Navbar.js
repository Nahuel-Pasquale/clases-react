import React from "react";
import LinkItem from "../linkItem/LinkItem";
import {
  LinkContainerStyled,
  LogoStyled,
  NavbarContainerStyled,
  TitleStyled,
} from "./NavbarStyles";

const Navbar = () => {

  return (
    <NavbarContainerStyled>
      <LogoStyled>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655752940/coding/ReactQuery/LogoNucba_rtlry0.png"
          alt="Logo"
        />
        <TitleStyled>NucbaMusic</TitleStyled>
      </LogoStyled>

      <LinkContainerStyled>
        {/* contenedor de links */}
        <LinkItem to="/"> Home </LinkItem>
        <LinkItem to="/bands"> Bands </LinkItem>
      </LinkContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
