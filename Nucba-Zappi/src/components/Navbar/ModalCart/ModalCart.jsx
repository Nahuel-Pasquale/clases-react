import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as cartActions from '../../../redux/cart/cart-actions';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../../utils';

import Submit from '../../UI/Submit/Submit';
import Increase from '../../UI/Increase/Increase';
import ModalCartCard from './ModalCartCard';

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from './ModalCartStyles';
import { ModalOverlayStyled } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';

const ModalCart = () => {

  const { cartItems, shippingCost } = useSelector(state => state.cart);
  const hiddenCart = useSelector(state => state.cart.hidden);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if(!hiddenCart) {
      dispatch(cartActions.toggleHiddenCart());
    }
  }, [dispatch, hiddenCart]);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(cartActions.toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className='close__modal '
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(cartActions.toggleHiddenCart())}
              >
                <MdOutlineClose size='24px' />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={() => dispatch(cartActions.clearCart())}
                  bgColor='var(--magenta)'
                  disabled={ !cartItems.length }
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {
                  cartItems.length ? (
                    cartItems.map(item => (
                      <ModalCartCard key={item.id} {...item} />
                    ))
                  ) : (
                    <p> Compra algo dale! </p>
                  )
                }
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>{formatPrice(totalPrice + shippingCost)}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit onClick={() => {
                  navigate('/checkout')
                  dispatch(cartActions.toggleHiddenCart())
                  }}
                  disabled={ !cartItems.length }
                >
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
