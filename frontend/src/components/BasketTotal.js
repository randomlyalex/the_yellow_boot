import React from 'react';
import { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

//Material UI
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Paper, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

//Actions
import { createOrder } from '../redux/actions/orderActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const BasketTotal = ({ basket }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

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
            <Accordion
              expanded={expanded}
              key={1}
              onChange={() => setExpanded(!expanded)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography className={classes.heading}>
                  Have a code?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Discount section could live here</Typography>
              </AccordionDetails>
            </Accordion>
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
