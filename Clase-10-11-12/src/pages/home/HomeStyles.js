import styled from "styled-components";
import { desktop, tablet, widescreen } from "../../media/queries";

export const HomeContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;

  width: 90%;
  height: calc(100vh - 94px);

  margin-left: 10%;

  overflow: hidden;

  ${desktop} {
    height: auto;
    margin: 0 auto;
  }
`;

export const HomeContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  width: 45%;

  ${widescreen} {
    display: inline;
    width: 50%;
    margin-top: 20px;
  }

  ${desktop} {
    display: flex;
    gap: 30px;
    width: 80%;
    text-align: center;
  }

  ${tablet} {
    width: 100%;
  }
`;

export const HomeTitleStyled = styled.h1`
  margin-top: 25px;
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 64px;
  line-height: 70px;

  color: #ffffff;

  ${widescreen} {
    margin: 0;
    margin-top: 15px;
  }

  ${desktop} {
    margin-bottom: 10px;
  }
`;

export const HomeDescriptionStyled = styled.p`
  margin-bottom: 35px;

  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  color: #ffffff;

  ${widescreen} {
    margin-bottom: 20px;
  }
`;

export const HomeButtonStyled = styled.button`
  width: 255px;
  margin-bottom: 35px;
  padding: 12px 24px;

  color: #141414;

  background: #ffffff;
  border-radius: 5px;

  ${desktop} {
    margin: 0 auto;
  }
`;

export const HomeImageContainer = styled.div`
  width: 50%;
  position: relative;

  & img {
    position: absolute;
    bottom: -25%;
    right: 0;

    max-width: 100%;
    height: 100%;
  }

  ${desktop} {
    display: none;
  }
`;
