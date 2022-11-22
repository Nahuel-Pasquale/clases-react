import { initialPokemon } from "../data/initialPokemon";
import { TYPES } from "../types";

export const initialState = {
  data: initialPokemon,
  isLoading: false,
  error: false,
};

export const pokemonReducer = (state = initialState, action) => {
  console.log('action ==> ', action);
  switch (action.type) {
    case TYPES.IS_FETCHING:
      return {
        isLoading: true,
        data: null,
        error: false,
      };

    case TYPES.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case TYPES.ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'Soy un error',
      };
    default:
      return state;
  }
};