import styled from "styled-components";

export const CardFooterContainerStyled = styled.div`
  width: 270px;
  margin-left: -30px;
  margin-top: 30px;
  border-top: 1px solid #e5e7eb;
  background: #181818;
  border-radius: 0px 0px 8px 8px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #ec4899;
  & h4 {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
  }
`;

export const LastSongStyled = styled.p`
  margin: 0;
  color: white;
  text-align: center;
  font-size: 15px;
`;
