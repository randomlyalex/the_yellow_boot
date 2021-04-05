import axios from 'axios';
import { returnErrors } from './errorActions';
import * as actionTypes from '../constants/orderConstants';

export const getOrders = (uid) => (dispatch) => {
  dispatch(setOrdersLoading());
  axios
    .get(`/api/order/query?uid=${uid}`)
    .then((res) =>
      dispatch({
        type: actionTypes.GET_ORDERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const createOrder = (uid) => (dispatch) => {
  axios
    .post(`/api/order/query?uid=${uid}`)
    .then((res) =>
      dispatch({
        type: actionTypes.CREATE_ORDER,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setOrdersLoading = () => {
  return {
    type: actionTypes.ORDERS_LOADING,
  };
};
