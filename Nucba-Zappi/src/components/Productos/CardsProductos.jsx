import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { INITIAL_LIMIT } from '../../utils';

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products);
  let totalProducts = useSelector(state => state.products.totalProducts);

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  if(selectedCategory){
    products = products.filter(producto => producto.category === selectedCategory);
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      <ProductosContainer>
        {
          products.map((producto, i) => 
            limit > i ? <CardProducto key={producto.id} { ...producto } /> : null)
        }
      </ProductosContainer>

      { !selectedCategory && (<ButtonContainerStyled>
        <Button
          onClick={ () => setLimit(limit - INITIAL_LIMIT) }
          secondary='true'
          disabled={ INITIAL_LIMIT === limit }
        >
          <span>Ver menos</span>
        </Button>
        <Button 
          onClick={() => setLimit(limit + INITIAL_LIMIT)}
          disabled={ totalProducts <= limit }
        >
          Ver más
        </Button>
      </ButtonContainerStyled>)}
    </>
  );
};

export default CardsProductos;
