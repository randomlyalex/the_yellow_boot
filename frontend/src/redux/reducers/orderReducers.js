import * as actionTypes from '../constants/orderConstants';

const initialState = {
  orders: [],
  loading: false,
};

export const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };

    case actionTypes.CREATE_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };

    case actionTypes.ORDERS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
