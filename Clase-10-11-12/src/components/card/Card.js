import React from "react";

import BandPhoto from "../bandPhoto/BandPhoto";
import BandButton from "../bandButton/BandButton";

import {
  CardContainerStyled,
  CardContentContainerStyled,
  CardDescriptionStyled,
  CardTitleStyled,
} from "./CardStyles";

const Card = (props) => {
  const { name, img, listeners, genre } = props;

  return (
    <CardContainerStyled>
      <BandPhoto img={img} alt={name} />

      <CardContentContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <CardDescriptionStyled>
          {listeners} oyentes mensuales
        </CardDescriptionStyled>
      </CardContentContainerStyled>

      <BandButton genre={genre} />
    </CardContainerStyled>
  );
};

export default Card;
