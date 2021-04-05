import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { authReducers } from './reducers/authReducers';
import { basketReducers } from './reducers/basketReducers';
import {
  productReducers,
  productDetailReducers,
} from './reducers/productReducer';
import { errorReducers } from './reducers/errorReducers';
import { orderReducers } from './reducers/orderReducers';

const reducer = combineReducers({
  auth: authReducers,
  basket: basketReducers,
  error: errorReducers,
  getProducts: productReducers,
  productDetail: productDetailReducers,
  order: orderReducers,
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
