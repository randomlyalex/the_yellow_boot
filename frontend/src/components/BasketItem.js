// import { Link } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Material UI components

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import image1 from '../static/img/1.jpg';
import { CardActionArea } from '@material-ui/core';

//Actions
import {
  getBasket,
  addToBasket,
  removeFromBasket,
  emptyBasket,
} from '../redux/actions/basketActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();

  const { isAuthenticated, user, isLoading: userLoading } = useSelector(
    (state) => state.auth
  );

  const { imageUrls, description, quantity, price, name, productId } = item;

  const increaseByOne = () => {
    dispatch(addToBasket(user._id, productId, 1));
  };
  const decreaseByOne = () => {
    dispatch(removeFromBasket(user._id, productId, 1));
  };

  return (
    <>
      <Grid container item xs={12}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Brand Here
              </Typography>
              <Typography component="h5" variant="h5">
                £ {price[2].toFixed(2)}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton onClick={decreaseByOne}>-</IconButton>
              <IconButton disabled>{item.quantity}</IconButton>
              <IconButton onClick={increaseByOne}>+</IconButton>
            </div>
          </div>

          <CardMedia className={classes.image} image={image1} title={name} />
        </Card>
      </Grid>
    </>
  );
};

export default BasketItem;
