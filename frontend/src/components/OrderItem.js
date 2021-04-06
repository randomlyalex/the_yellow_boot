import React from 'react';

const OrderItem = ({ order, handleOrderClick }) => {
  let date = new Date(order.date_ordered);
  return (
    <p>
      Order Date:
      {date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes()}{' '}
      - Order Total: £{order.total.toFixed(2)}
    </p>
  );
};

export default OrderItem;
