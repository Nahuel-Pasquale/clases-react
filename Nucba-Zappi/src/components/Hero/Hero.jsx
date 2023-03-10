import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../../redux/categories/categories-actions'

import Button from '../UI/Button/Button';

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from './HeroStyles';

const Hero = ({ doScroll }) => {

  const [value, setValue] = useState('');

  const listOfCategories = useSelector(
    state => state.categories.categories
  ).map(category => category.category);

  const dispatch = useDispatch();


  const handlerSubmit = (e, value) => {
    e.preventDefault();

    const findCategory = value.trim().toLowerCase().split(' ').join('');
    console.log('newCategory ==> ', findCategory, listOfCategories);
    const selectedCategory = listOfCategories.find(
      category => category.toLowerCase() === findCategory
    )
    if(selectedCategory) {
      dispatch(categoriesActions.selectCategory(selectedCategory));
      doScroll();
    } else {
      return alert('categoria no encontrada');
    }

    setValue('');
  }

  return (
    <HeroContainerStyled>
      <div>
        <h1 className='title'>¿Qué categoría estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            value={value}
            onChange={e => setValue(e.target.value)}
            type='text'
            placeholder='Ej. Pizzas a la piedra'
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button 
            onClick={e => handlerSubmit(e, value)} 
            radius='10' 
            disabled={ !value }
          >
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png'
          alt=''
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
