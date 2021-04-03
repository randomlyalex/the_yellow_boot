// import { Link } from 'react-router-dom';
import React from 'react';
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

const BasketItem = () => {
  const classes = useStyles();
  const theme = useTheme();

  const product = {
    _id: { $oid: '605fbddde435615896b0cdb5' },
    imageUrls: [
      'http://website.com/url1.jpg',
      'http://website.com/url2.jpg',
      'http://website.com/url3.jpg',
    ],
    price: [5, 2, 12.0],
    package_dimensions_cm: [35, 25, 13],
    name: 'Shoe 1',
    description: 'Shoe 1 description',
    category1: 'MENS',
    category2: 'FORMAL',
    taxCode: '1',
    weightkg: 1,
    date_added: { $date: '2021-03-27T23:21:01.341Z' },
    __v: 0,
  };
  const { imageUrls, description, price, name, id: productId } = product;

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
                Brand
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton>-ve</IconButton>
              <IconButton disabled>Qty</IconButton>
              <IconButton>+ve</IconButton>
            </div>
          </div>
          <CardMedia className={classes.image} image={image1} title={name} />
        </Card>
      </Grid>
    </>
  );
};

export default BasketItem;
