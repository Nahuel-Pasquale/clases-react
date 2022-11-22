import React from "react";
import Button from "../../components/button/Button";
import { ProgressBar } from "../../components/progress/ProgressBar";
import Title from "../../components/title/Title";
import { ContainerButtonStyled, ErrorContainerStyled } from "./Error404Styles";

const Error404 = () => {
  return (
    <ErrorContainerStyled>
      <Title>ERROR 404 NOT FOUND!</Title>
      <ContainerButtonStyled>
        <Button primary onClick={(e) => e.preventDefault()}>
          {" "}
          Volver al inicio
        </Button>
      </ContainerButtonStyled>
      <ProgressBar />
    </ErrorContainerStyled>
  );
};

export default Error404;
