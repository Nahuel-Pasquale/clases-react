import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkoutInitialValues, checkoutValidationSchema } from '../../../formik';
import * as ordersActions from '../../../redux/orders/orders-actions';
import * as cartActions from '../../../redux/cart/cart-actions';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyles';
import Loader from '../../UI/Loader/Loader';

const CheckoutForm = ({ cartItems, price, shippingCost }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async values => {
            const orderData = {
              cartItems,
              price,
              shippingCost,
              total: price + shippingCost,
              shippingDetails: {...values}
            };
            try {
              await dispatch(ordersActions.createOrder(orderData));
              navigate('/felicitaciones');
              dispatch(cartActions.clearCart());
            } catch (error) {
              alert('ERROR INESPERADO')
            }
          }
        }
      >
        {({ isSubmitting }) => (
        <Form>
          <Input
            htmlFor='nombre'
            name='name'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
          >
            Nombre
          </Input>
          <Input
            htmlFor='celular'
            name='phone'
            type='text'
            id='celular'
            placeholder='Tu celular'
          >
            Celular
          </Input>
          <Input
            htmlFor='localidad'
            name='location'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
          >
            Localidad
          </Input>
          <Input
            htmlFor='direccion'
            name='address'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
          <div>
            <Submit disabled={ !cartItems.length }>
              { isSubmitting ? <Loader /> : 'Iniciar Pedido'}
            </Submit>
          </div>
        </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
