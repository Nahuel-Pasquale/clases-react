import { ErrorMessage, Field } from 'formik';
import React from 'react';
import useRedirect from '../../../hooks/useRedirect';

import { ErrorMessageStyled, InputContainerStyled, LoginInputStyled } from './LoginInputStyles';

const LoginInput = ({ name, type, placeholder }) => {

  useRedirect('/');
  
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
      <InputContainerStyled>
        <LoginInputStyled 
          type={type} 
          placeholder={placeholder} 
          {...field}
          isError={errors[field.name] && touched[field.name]}
          />
        <ErrorMessage name={field.name}>
          { message => <ErrorMessageStyled> { message } </ErrorMessageStyled> }
        </ErrorMessage>
      </InputContainerStyled>
      )}
    </Field>
  );
};

export default LoginInput;
