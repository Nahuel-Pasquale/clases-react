import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  ForgotContainerStyled,
  ForgotEmailStyled,
  Form,
} from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
      <Formik>
        <Form>
          <LoginInput type='text' placeholder='Mail de recuperación' />
          <ForgotEmailStyled onClick={() => navigate('/login')}>
            ¿Ya te acordaste la contraseña? Volvé
          </ForgotEmailStyled>
          <Submit type='button' onClick={e => e.preventDefault()}>
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
