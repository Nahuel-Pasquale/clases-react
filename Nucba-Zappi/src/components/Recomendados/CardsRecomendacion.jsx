import React from 'react';
import { recommended } from '../../data/Recommended';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={recommended.length}>
      {
        recommended.map((recomendado) => (
          <CardRecomendacion key={recomendado.id} { ...recomendado } />
          ))
      }
    </CardsContainer>
  );
};

export default CardsRecomendacion;
