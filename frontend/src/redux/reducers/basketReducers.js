import * as actionTypes from '../constants/basketConstants';

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

    case actionTypes.BASKET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
