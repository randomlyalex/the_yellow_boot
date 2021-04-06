import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

//Material UI
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Paper, Button } from '@material-ui/core';

//Actions
import { createOrder } from '../redux/actions/orderActions';

const BasketTotal = ({ basket }) => {
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(createOrder(basket.userId));
  };

  return (
    <>
      <Paper style={{ padding: '25px', margin: '20px' }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <FormControl>
              <Select native>
                <option aria-label="None" value="">
                  Select Delivery/Collection
                </option>
                <option value={'uk-standard'}>UK Standard</option>
                <option value={'uk-next-day'}>UK Next Day</option>
                <option value={'uk-choose-day'}>UK Choose Day</option>
                <option value={'click-collect'}>Click & Collect</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            Discount Section
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={6}>
            Subtotal:
          </Grid>
          <Grid item xs={6}>
            {basket.total.toFixed(2)}
          </Grid>
          <Grid item xs={6}>
            Delivery
          </Grid>
          <Grid item xs={6}>
            5.00
          </Grid>
          <Grid item xs={6}>
            Total
          </Grid>
          <Grid item xs={6}>
            {(basket.total + 5).toFixed(2)}
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleCheckout}>Checkout</Button>{' '}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default BasketTotal;
