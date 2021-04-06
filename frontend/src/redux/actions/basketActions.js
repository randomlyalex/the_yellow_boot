import axios from 'axios';
import * as actionTypes from '../constants/basketConstants';
import { returnErrors } from './errorActions';

export const getBasket = (uid) => (dispatch) => {
  dispatch(setBasketLoading());
  axios
    .get(`/api/basket/query?uid=${uid}`)
    .then((res) =>
      dispatch({
        type: actionTypes.GET_BASKET,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addToBasket = (uid, productId, quantity) => async (dispatch) => {
  axios
    .post(`/api/basket/query?uid=${uid}`, { productId, quantity })
    .then((res) =>
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const removeFromBasket = (uid, productId, quantity) => (dispatch) => {
  axios
    .delete(`/api/basket/query?uid=${uid}`, { productId, quantity })
    .then((res) =>
      dispatch({
        type: actionTypes.REMOVE_FROM_BASKET,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const emptyBasket = (uid, basketId) => (dispatch) => {
  axios
    .delete(`/api/basket/query?uid=${uid}`, { basketId })
    .then((res) =>
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setBasketLoading = () => {
  return {
    type: actionTypes.BASKET_LOADING,
  };
};
