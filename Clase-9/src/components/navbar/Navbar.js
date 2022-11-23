import {
  LogoStyled,
  NavbarContainerStyled,
  NavbarStyled,
} from "./NavbarStyles";
import Separador from "../separador/Separador";
import { LinkItem } from "../linkItem/LinkItem";
import { useContext } from "react";
import AuthContext from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { isAuth, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={() => navigate('/')}>
        <img
          alt="Logo de helado"
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1653953150/coding/logoPixel_qihcme.png"
        />
      </LogoStyled>
      <NavbarStyled>
        <Separador />

        <LinkItem to="product">Productos</LinkItem>
        <LinkItem to="contacto">Contacto</LinkItem>
        <LinkItem to={ isAuth ? `/usuario/${user}` : 'login' }>
          { isAuth ? 'Perfil' : 'Login' }
        </LinkItem>

        <Separador />
      </NavbarStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
