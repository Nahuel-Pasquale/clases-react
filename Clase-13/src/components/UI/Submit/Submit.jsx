import React from 'react';
import { ButtonSubmitStyled } from './SubmitStyles';

const Submit = () => {
// const Submit = ({ onSubmit }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit();
  // }

  return (
    <ButtonSubmitStyled
    // onSubmit={(e) => handleSubmit(e)}
    type='submit'>
      Enviar
    </ButtonSubmitStyled>);
};

export default Submit;
