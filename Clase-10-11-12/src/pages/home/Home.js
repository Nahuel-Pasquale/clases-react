import React from "react";
import ListOfTechnologies from "../../components/listOfTechnologies/ListOfTechnologies";
import {
  HomeButtonStyled,
  HomeContainerStyled,
  HomeContentStyled,
  HomeDescriptionStyled,
  HomeImageContainer,
  HomeTitleStyled,
} from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainerStyled>
      <HomeContentStyled>
        <HomeTitleStyled>La música lo simplifica casi todo</HomeTitleStyled>
        <HomeDescriptionStyled>
          Acá debería ir algun texto, pero tenemos menos luces que el coche de
          los Pica Piedras.
        </HomeDescriptionStyled>
        <HomeButtonStyled>Obtener NucbaMusic Free</HomeButtonStyled>
        <ListOfTechnologies />
      </HomeContentStyled>

      <HomeImageContainer>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655773678/coding/ReactQuery/Astronauta_o1w7bm.png"
          alt="Astronauta"
        />
      </HomeImageContainer>
    </HomeContainerStyled>
  );
};

export default Home;
