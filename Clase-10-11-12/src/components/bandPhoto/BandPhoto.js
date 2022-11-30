import React from "react";
import {
  BandPhotoContainerStyled,
  BandPhotoImageStyled,
} from "./BandPhotoStyles";

const BandPhoto = ({ img, alt }) => {
  return (
    <BandPhotoContainerStyled>
      <BandPhotoImageStyled src={img} alt={alt} />
    </BandPhotoContainerStyled>
  );
};

export default BandPhoto;
