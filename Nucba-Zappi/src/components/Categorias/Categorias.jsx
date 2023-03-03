import React from 'react';
import { Categories } from '../../data/Categories';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';
const Categorias = () => {
  return (
    <CategoriasContainer>
      {
        Categories.map(categoria => 
          ( <Categoria key={categoria.id}  { ...categoria } /> ))
      }
    </CategoriasContainer>
  );
};

export default Categorias;
