export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const TOGGLE_MENU_HIDDEN = 'TOGGLE_MENU_HIDDEN';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const toggleMenuHidden = () => ({
  type: TOGGLE_MENU_HIDDEN,
})