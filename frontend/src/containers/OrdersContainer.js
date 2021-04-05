import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderDetail from '../components/OrderDetail';

//Actions
import { getOrders as listOrders } from '../redux/actions/orderActions';

const OrdersContainer = () => {
  const [clickedOrder, setClickedOrder] = useState(null);

  const dispatch = useDispatch();

  const { id: uid, isLoading: authLoading, isAuthenticated } = useSelector(
    (state) => state.auth.user
  );

  const { orders: userOrders, loading: ordersLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(listOrders(uid));
  }, [dispatch]);

  return (
    <>
      <div>
        {!userOrders && ordersLoading ? (
          'Loading orders'
        ) : (
          <>
            {clickedOrder && <OrderDetail clickedOrder={clickedOrder} />}
            {userOrders.map((order) => (
              <>
                <p
                  key={order._id}
                  onClick={() => {
                    setClickedOrder(order);
                  }}>
                  {order.date_ordered} - {order.total}
                </p>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default OrdersContainer;
