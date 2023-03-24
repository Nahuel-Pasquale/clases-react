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
import { forgotPasswordInitialValues, forgotPasswordValidationSchema } from '../../formik';
import { resetPassword } from '../../firebase/firebase-utils';
import useRedirect from '../../hooks/useRedirect';

const ForgotPassword = () => {
  const navigate = useNavigate();

  useRedirect('/');

  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
      <Formik
        initialValues={forgotPasswordInitialValues}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={async (values, action) => {
          await resetPassword(values.email);
          action.resetForm();
        }}
      >
        <Form>
          <LoginInput name='email' type='text' placeholder='Mail de recuperación' />
          <ForgotEmailStyled onClick={() => navigate('/login')}>
            ¿Ya te acordaste la contraseña? Volvé
          </ForgotEmailStyled>
          <Submit>
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
