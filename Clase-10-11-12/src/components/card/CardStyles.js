import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 210px;

  padding: 28px 30px;

  border-radius: 8px;
  background-color: #181818;
`;

export const CardContentContainerStyled = styled.div`
  margin: 24px 0;
  text-align: center;
`;

export const CardTitleStyled = styled.h2`
  margin: 0;

  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;

export const CardDescriptionStyled = styled.p`
  margin-bottom: 0;
  color: #6b7280;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
`;


