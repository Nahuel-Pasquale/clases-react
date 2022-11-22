import {
  LogoStyled,
  NavbarContainerStyled,
  NavbarStyled,
} from "./NavbarStyles";
import Separador from "../separador/Separador";
import { LinkItem } from "../linkItem/LinkItem";

function Navbar() {
  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={(e) => e.preventDefault()}>
        <img
          alt="Logo de helado"
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1653953150/coding/logoPixel_qihcme.png"
        />
      </LogoStyled>
      <NavbarStyled>
        <Separador />

        <LinkItem to="">Productos</LinkItem>
        <LinkItem to="">Contacto</LinkItem>
        <LinkItem to="">Login</LinkItem>

        <Separador />
      </NavbarStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
