import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import * as userActions from '../../redux/user/user-actions';

import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';

import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import CartIcon from './CartIcon/CartIcon';

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  UserImageStyled,
} from './NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <div>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png'
            alt='Logo'
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to='/'>
            <LinkContainerStyled home>
              <HiHome />
            </LinkContainerStyled>
            Home
          </Link>
        </motion.div>

        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>

        <UserNavStyled>
          <UserContainerStyled 
            onClick={ () =>
              currentUser 
                ? dispatch(userActions.toggleMenuHidden())
                : navigate('/register')
            }
          >
            <SpanStyled>
              { currentUser ? `${currentUser.displayName}` : `Inicia sesión`}
            </SpanStyled>
            { currentUser?.photoURL
              ? (
                <UserImageStyled src={ currentUser.photoURL } alt={currentUser.displayName} />
                ) 
              : (<FaUserAlt />)}
          </UserContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
