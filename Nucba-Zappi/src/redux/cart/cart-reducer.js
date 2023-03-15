import { SHIPPING_COST } from "../../utils";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_HIDDEN_CART } from "./cart-actions";
import {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost
} from './cart-utils';


const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        shippingCost: SHIPPING_COST,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    case TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
}

export default cartReducer;