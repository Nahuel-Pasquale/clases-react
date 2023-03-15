import { formatPrice } from '../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import * as cartActions from '../../redux/cart/cart-actions'

import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from './CardProductCheckoutStyles';
import { useDispatch } from 'react-redux';

const CardProductCheckout = ({ img, title, desc, price, quantity, id }) => {

  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
      <img
        src={ img }
        alt={ title }
      />
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <TextStyled> { desc } </TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={() => dispatch(cartActions.removeFromCart(id))}
        >
          <FaMinus />
        </Increase>
        <Count>{ quantity }</Count>
        <Increase onClick={() => dispatch(cartActions.addToCart({ img, title, desc, price, quantity, id }))}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
