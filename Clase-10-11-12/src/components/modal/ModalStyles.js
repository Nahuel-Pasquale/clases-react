import styled from "styled-components";

export const ModalContainerStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  min-width: 300px;
  background-color: #000000;
  border-radius: 20px;
  box-shadow: 24px;
  padding: 38px;
  &:focus {
    outline: none;
  }
`;

export const ModalTitleStyled = styled.h2`
  margin-top: 0;
  font-weight: 800;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: -0.025em;
  color: #ffffff;
`;

export const ModalDescriptionStyled = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #d1d5db;
`;

export const InputsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6%;
  margin-top: 30px;
`;

export const ButtonsContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;
`;
