import * as actionTypes from '../constants/basketConstants';
import { CREATE_ORDER } from '../constants/orderConstants';

const initialState = {
  basketItems: [],
  loading: false,
};

export const basketReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BASKET:
      return {
        ...state,
        basketItems: action.payload,
        loading: false,
      };

    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basketItems: action.payload,
      };

    case actionTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        basketItems: action.payload,
      };

    case CREATE_ORDER:
    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basketItems: initialState.basketItems,
      };

    case actionTypes.BASKET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
