import * as actionTypes from '../constants/errorConstants';

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export const errorReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };

    case actionTypes.CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };

    default:
      return state;
  }
};
