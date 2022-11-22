import React from "react";
import Panel from "../../components/panel/Panel";
import Title from "../../components/title/Title";
import { SectionContainerStyled } from "./SectionStyles";

const Section = () => {
  return (
    <>
      <SectionContainerStyled>
        <Title> Seccion de Helados </Title>
        <Panel>
          {" "}
          Acá tendríamos nuestros Helados si alguno de la heladería trabajara{" "}
        </Panel>
      </SectionContainerStyled>
    </>
  );
};

export default Section;
