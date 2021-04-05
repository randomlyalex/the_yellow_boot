import React from 'react';

const OrderDetail = ({ clickedOrder }) => {
  const orderItems = clickedOrder.items.map((item) => (
    <li key={item._id}>
      Name: {item.name} - Qty: {item.quantity} - per Unit:
      {item.price[2]}
    </li>
  ));

  return (
    <>
      <ul>{orderItems}</ul>
    </>
  );
};
export default OrderDetail;
