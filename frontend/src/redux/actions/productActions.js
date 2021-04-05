import axios from 'axios';
import * as actionTypes from '../constants/productConstants';
import { returnErrors } from './errorActions';

export const getProducts = () => (dispatch) => {
  dispatch(setProductsLoading());
  axios
    .get('/api/products')
    .then((res) =>
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getProductById = (pid) => (dispatch) => {
  dispatch(setProductsLoading());
  axios
    .get(`/api/products/query?pid=${pid}`)
    .then((res) =>
      dispatch({
        type: actionTypes.GET_PRODUCT_BY_ID,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addProduct = (product) => (dispatch) => {
  axios
    .post('/api/products', product)
    .then((res) =>
      dispatch({
        type: actionTypes.ADD_PRODUCT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteProduct = (pid) => (dispatch) => {
  axios
    .delete(`/api/products/query?pid=${pid}`)
    .then((res) =>
      dispatch({
        type: actionTypes.DELETE_PRODUCT,
        payload: pid,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateProduct = (pid, product) => (dispatch) => {
  axios
    .put(`/api/products/query?pid=${pid}`, product)
    .then((res) =>
      dispatch({
        type: actionTypes.UPDATE_PRODUCT,
        payload: Promise.all([pid, res.data]),
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setProductsLoading = () => {
  return {
    type: actionTypes.PRODUCTS_LOADING,
  };
};
