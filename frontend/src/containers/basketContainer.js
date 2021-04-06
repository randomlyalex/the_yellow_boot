import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Grid } from '@material-ui/core';
import BasketHeader from '../components/BasketHeader';
import BasketItem from '../components/BasketItem';
import BasketTotal from '../components/BasketTotal';
import {
  getBasket,
  addToBasket,
  removeFromBasket,
  emptyBasket,
} from '../redux/actions/basketActions';

const BasketContainer = () => {
  const dispatch = useDispatch();

  const { basketItems: basket, loading: basketLoading } = useSelector(
    (state) => state.basket
  );

  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch, order]);

  const handleEmptyBasket = () => {
    dispatch(emptyBasket(basket.userId, basket._id));
  };

  return (
    <>
      <Grid container justify="center" style={{ paddingTop: '25px' }}>
        <Grid item xs={false} sm={2} />
        <Grid container item xs={12} sm={8}>
          <Grid item xs={12} md={8}>
            <BasketHeader />
            <Grid item xs={12} md={8}>
              <Button onClick={handleEmptyBasket}>Empty basket</Button>
            </Grid>
            {'items' in basket &&
              basket.items.map((item) => <BasketItem item={item} />)}
          </Grid>
          <Grid item xs={12} md={4}>
            {'items' in basket && <BasketTotal basket={basket} />}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};

export default BasketContainer;
