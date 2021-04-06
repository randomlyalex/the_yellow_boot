import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderDetail from '../components/OrderDetail';
import OrderItem from '../components/OrderItem';

//Actions
import { getOrders as listOrders } from '../redux/actions/orderActions';
import { loadUser } from '../redux/actions/authActions';

const OrdersContainer = () => {
  const [clickedOrder, setClickedOrder] = useState(null);
  const dispatch = useDispatch();
  const { isAuthenticated, user, isLoading: userLoading } = useSelector(
    (state) => state.auth
  );
  const { orders: userOrders, loading: ordersLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    user && isAuthenticated && !userLoading && dispatch(listOrders(user._id));
  }, [isAuthenticated, dispatch, user, userLoading]);

  const handleOrderClick = (order) => {
    setClickedOrder(order);
  };

  return (
    <>
      <div>
        {!userOrders && ordersLoading ? (
          'Loading orders'
        ) : (
          <>
            <Grid container justify="center">
              <Grid item>
                {userOrders.map((order) => (
                  <div onClick={() => handleOrderClick(order)}>
                    <OrderItem key={order._id} order={order} />
                  </div>
                ))}
              </Grid>
              <Grid>
                {clickedOrder && <OrderDetail clickedOrder={clickedOrder} />}
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default OrdersContainer;
