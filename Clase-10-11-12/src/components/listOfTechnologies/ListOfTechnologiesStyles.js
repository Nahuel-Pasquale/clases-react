import styled from "styled-components";
import { desktop } from "../../media/queries";

export const ListTitleStyled = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #878787;
`;

export const ListContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  & img {
    width: auto;
    height: 30px;
  }

  ${desktop} {
    justify-content: center;
    margin-bottom: 20px;
  }
`;
