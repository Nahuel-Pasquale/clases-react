import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../reducers'
import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

export const store = configureStore({
  reducer: reducer,
  applyMiddleware: applyMiddleware(reduxThunk),
});

store.subscribe(() => console.log('cambie de estado'));