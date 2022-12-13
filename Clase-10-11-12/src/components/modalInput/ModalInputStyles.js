import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  width: ${(props) => (props.full ? "100%" : "47%")};
  margin-bottom: 20px;
`;

export const InputLabelStyled = styled.label`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

export const InputStyled = styled.input`
  padding: 9px 13px;
  color: white;
  background: #000000;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  &:focus {
    outline: none;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
