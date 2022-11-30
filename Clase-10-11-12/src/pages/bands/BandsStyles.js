import styled from "styled-components";

export const BandsContainerStyled = styled.div`
  width: 90%;
  display: grid;
  margin: 40px auto;
  justify-content: center;

  grid-template-columns: repeat(auto-fit, 270px);
  gap: 40px;
`;

export const BandsErrorMessageStyled = styled.h2`
  color: red;
  text-align: center;
`;

export const BandsDisabledMessageStyled = styled.h2`
  color: white;
  text-align: center;
`
