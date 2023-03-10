import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../../redux/categories/categories-actions'

import { BorderDecoration, CardCategoria } from './CategoriasStyles';

export const Categoria = ({ img, title, category }) => {

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );
  const dispatch = useDispatch();


  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={ () => dispatch(categoriesActions.selectCategory(category)) }
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={img}
        alt={category}
      />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
