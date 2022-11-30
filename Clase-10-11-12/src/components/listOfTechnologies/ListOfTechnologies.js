import React from "react";
import {
  ListContainerStyled,
  ListTitleStyled,
} from "./ListOfTechnologiesStyles";

const ListOfTechnologies = () => {
  return (
    <div>
      <ListTitleStyled>Usamos...</ListTitleStyled>
      <ListContainerStyled>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655752940/coding/ReactQuery/LogoAxios_ruguzz.png"
          alt="Axios"
        />
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655752940/coding/ReactQuery/LogoReactQuery_rf3mlh.png"
          alt="React Query"
        />
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655752940/coding/ReactQuery/LogoReactRouter_wsj9ei.png"
          alt="React Router"
        />
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655752940/coding/ReactQuery/LogoStyledComponents_uhcczu.png"
          alt="Styled Components"
        />
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655758589/coding/ReactQuery/MaterialUi_okz00z.png"
          alt="Material UI"
        />
      </ListContainerStyled>
    </div>
  );
};

export default ListOfTechnologies;
