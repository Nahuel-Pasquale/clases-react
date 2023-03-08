import React from 'react';
import { useSelector } from 'react-redux';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';
const Categorias = () => {

  const categories = useSelector(state => state.categories.categories)

  return (
    <CategoriasContainer>
      {
        categories.map(categoria => 
          ( <Categoria key={categoria.id}  { ...categoria } /> ))
      }
    </CategoriasContainer>
  );
};

export default Categorias;
