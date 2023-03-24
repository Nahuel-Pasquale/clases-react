import { SET_CURRENT_USER, TOGGLE_MENU_HIDDEN } from "./user-actions";

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }

    case TOGGLE_MENU_HIDDEN:
      console.log(state);
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      }
  
    default:
      return state;
  }
}

export default userReducer;
