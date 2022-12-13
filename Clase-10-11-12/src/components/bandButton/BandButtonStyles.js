import styled, { css } from "styled-components";

export const BandButtonStyled = styled.button`
  margin: 0 auto;
  padding: 4px 8px;
  background: #4c1d95;
  border: none;
  border-radius: 12px;

  color: #c4b5fd;

  ${ (props) => 
    props.deleteButton &&
    css`
      color: rgba(255,255,255,0.87);
      background-color: #f63356;
      cursor: pointer;
    `}
`;
