import { ErrorMessage, Field } from "formik";
import React from "react";
import {
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
  ErrorStyled,
} from "./InputStyles";

const Input = ({ name, label, type, isError }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field 
      error={isError}
      name={name}
      type={type} 
      id={label} 
      as={InputStyled}
      />
      <ErrorMessage name={name} component={ErrorStyled} />
      {/* {isError && <ErrorStyled> { isError } </ErrorStyled>} */}
    </InputBoxStyled>
  );
};

export default Input;
