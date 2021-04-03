import React from 'react';
import { Grid } from '@material-ui/core';
import BasketHeader from '../components/BasketHeader';
import BasketItem from '../components/BasketItem';
import BasketTotal from '../components/BasketTotal';

const BasketContainer = () => {
  return (
    <>
      <Grid container justify="center" style={{ paddingTop: '25px' }}>
        <Grid item xs={false} sm={2} />
        <Grid container item xs={12} sm={8}>
          <Grid item xs={12} md={8}>
            <BasketHeader />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
          </Grid>
          <Grid item xs={12} md={4}>
            <BasketTotal />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
};

export default BasketContainer;
