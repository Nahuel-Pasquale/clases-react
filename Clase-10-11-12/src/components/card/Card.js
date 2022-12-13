import React from "react";

import BandPhoto from "../bandPhoto/BandPhoto";
import BandButton from "../bandButton/BandButton";

import {
  ButtonsContainerStyled,
  CardContainerStyled,
  CardContentContainerStyled,
  CardDescriptionStyled,
  CardTitleStyled,
  LinkStyled,
} from "./CardStyles";
import { useLocation } from "react-router-dom";
import CardFooter from "../cardFooter/CardFooter";

const Card = (props) => {
  const { pathname } = useLocation();
  console.log('pathname ==> ', pathname);
  const { name, img, listeners, genre, lastSong, id } = props;

  return (
    <CardContainerStyled>
      <BandPhoto img={img} alt={name} />

      <CardContentContainerStyled>
        {/* <CardTitleStyled>{name}</CardTitleStyled> */}

        {pathname.match(/bands/i) ? (
          <LinkStyled to={`/band/${id}`}>
            <CardTitleStyled> {name} </CardTitleStyled>
          </LinkStyled>
        ) : (
          <CardTitleStyled> {name} </CardTitleStyled>
        )}

        <CardDescriptionStyled>
          {listeners} oyentes mensuales
        </CardDescriptionStyled>
      </CardContentContainerStyled>

      {/* <BandButton genre={genre} /> */}
      <ButtonsContainerStyled>
        <BandButton genre={genre} />
        { pathname.match(/band/i) && <BandButton id={id} deleteButton /> }
      </ButtonsContainerStyled>

      {!pathname.match(/band/i) && <CardFooter lastSong={lastSong} />}
      
    </CardContainerStyled>
  );
};

export default Card;
