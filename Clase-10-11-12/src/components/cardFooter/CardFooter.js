import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {
  CardFooterContainerStyled,
  ContentContainer,
  LastSongStyled,
} from "./CardFooterStyles";

const CardFooter = ({ lastSong }) => {
  return (
    <CardFooterContainerStyled>
      <ContentContainer>
        <PlayCircleIcon fontSize="small" />
        <h4>Último Lanzamiento</h4>
      </ContentContainer>
      <LastSongStyled> {lastSong} </LastSongStyled>
    </CardFooterContainerStyled>
  );
};

export default CardFooter;
