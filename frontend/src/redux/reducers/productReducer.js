import * as actionTypes from '../constants/productConstants';

const initialProductsState = {
  products: [],
  loading: false,
};

export const productReducers = (state = initialProductsState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };

    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };

    case actionTypes.UPDATE_PRODUCT:
      const { id, data } = action.payload;
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === id) {
            product = data;
          }
        }),
      };

    case actionTypes.PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const initialProductDetailState = {
  products: [],
  loading: false,
};

export const productDetailReducers = (
  state = initialProductDetailState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
