import { store } from '../store';
import { onSnapshot } from 'firebase/firestore';
import { createOrderDocument, getOrders } from '../../firebase/firebase-utils';
import { uuidv4 } from '@firebase/util';
import { CLEAR_ERROR, CREATE_ORDER_FAIL, FETCH_ORDERS_FAIL, FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS } from "./orders-types";


export const createOrderFail = error => ({
  type: CREATE_ORDER_FAIL,
  payload: error,
});

export const getOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const getOrdersStart = orders => ({
  type: FETCH_ORDERS_START,
});

export const getOrdersFail = error => ({
  type: FETCH_ORDERS_FAIL,
  payload: error || 'Ocurrió un error inesperado'
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const createOrder = orderData => async dispatch => {
  const {
    user: { currentUser },
  } = store.getState();

  try {
    const orderRef = await createOrderDocument({
      ...orderData,
      orderId: uuidv4(),
      userId: currentUser.id,
    });

    onSnapshot(orderRef, _snapShot => {
      dispatch(getFullOrders(currentUser.id));
    });
  } catch (error) {
    dispatch(createOrderFail(error));
  }
};

export const getFullOrders = userId => async dispatch => {
  const {
    orders: { orders: currentOrdersInRedux },
  } = store.getState();

  dispatch(getOrdersStart());
  try {
    const orders = await getOrders(
      userId,
      currentOrdersInRedux,
      dispatch,
      getFullOrders
    );
    dispatch(getOrdersSuccess(orders));
  } catch (error) {
    dispatch(getOrdersFail(error.message));
  }
};