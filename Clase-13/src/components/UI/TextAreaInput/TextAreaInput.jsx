import { ErrorMessage, Field } from "formik";
import React from "react";
import { InputBoxStyled, InputLabelStyled } from "../Input/InputStyles";
import { TextArea, ErrorStyled } from "./TextAreaInputStyles";

const TextAreaInput = ({ name, label, isError }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field as={TextArea} name={name} error={isError} id={label}/>
      <ErrorMessage name={name} component={ErrorStyled} />
      {/* {isError && <ErrorStyled> { isError } </ErrorStyled>} */}
    </InputBoxStyled>
  );
};

export default TextAreaInput;
