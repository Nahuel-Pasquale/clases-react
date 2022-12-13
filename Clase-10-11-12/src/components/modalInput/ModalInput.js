import React from "react";
import {
  InputContainerStyled,
  InputLabelStyled,
  InputStyled,
} from "./ModalInputStyles";

const ModalInput = ({ type, name, label, placeholder = "", handleChange }) => {
  return (
    <InputContainerStyled full={name === "img" ? true : false}>
      <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>
      {type === "number" ? (
        <InputStyled
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          min="1"
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <InputStyled
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
        />
      )}
    </InputContainerStyled>
  );
};

export default ModalInput;
