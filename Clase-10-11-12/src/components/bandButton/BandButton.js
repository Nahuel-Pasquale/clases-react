import React from "react";
import { BandButtonStyled } from "./BandButtonStyles";

const BandButton = ({ genre }) => {
  return <BandButtonStyled>{genre}</BandButtonStyled>;
};

export default BandButton;
