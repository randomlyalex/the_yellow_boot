import axios from 'axios';
import { returnErrors } from './errorActions';
import * as actionTypes from '../constants/authConstants';

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: actionTypes.USER_LOADING });

  axios
    .get('/api/user', tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.AUTH_ERROR,
      });
    });
};

export const register = (user) => (dispatch) => {
  const { username, name, email, password } = user;

  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //request body
  const body = JSON.stringify(user);

  axios
    .post('/api/register', body, config)
    .then((res) =>
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: actionTypes.REGISTER_FAIL,
      });
    });
};

export const login = (user) => (dispatch) => {
  const { username, name, email, password } = user;
  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //request body
  const body = JSON.stringify({ email, username, password });

  axios
    .post('/api/login', body, config)
    .then((res) =>
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: actionTypes.LOGIN_FAIL,
      });
    });
};
// logout user
export const logout = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  //Get token from local storage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
