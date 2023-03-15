import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../../redux/cart/cart-actions';

import { LinkContainerStyled } from './../NavbarStyles';

const CartIcon = () => {

  const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity), 0
  );

  const dispatch = useDispatch();

  return (
    <LinkContainerStyled onClick={() => dispatch(cartActions.toggleHiddenCart())}>
      <FaShoppingCart />
      <span>{ totalCartItems }</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
