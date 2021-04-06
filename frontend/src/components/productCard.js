// import { Link } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material UI components

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';

import { addToBasket } from '../redux/actions/basketActions';

const ProductCard = ({ product }) => {
  // const product = {
  //   _id: { $oid: '605fbddde435615896b0cdb5' },
  //   imageUrls: [
  //     'http://website.com/url1.jpg',
  //     'http://website.com/url2.jpg',
  //     'http://website.com/url3.jpg',
  //   ],
  //   price: [5, 2, 12.0],
  //   package_dimensions_cm: [35, 25, 13],
  //   name: 'Shoe 1',
  //   description: 'Shoe 1 description',
  //   category1: 'MENS',
  //   category2: 'FORMAL',
  //   taxCode: '1',
  //   weightkg: 1,
  //   date_added: { $date: '2021-03-27T23:21:01.341Z' },
  //   __v: 0,
  // };
  const dispatch = useDispatch();
  const { isAuthenticated, user, isLoading: userLoading } = useSelector(
    (state) => state.auth
  );

  const handleAddToBasket = () => {
    isAuthenticated && dispatch(addToBasket(user._id, product._id, 1));
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card>
          <CardActions>
            <Link href={`/product/detail/${product._id}`} color="inherit">
              <CardMedia
                component="img"
                alt="Shoe 1"
                height="270"
                image={product.imageUrls[0]}
              />
            </Link>
          </CardActions>
          <CardContent>
            <Grid container style={{ justifyContent: 'center' }} wrap="nowrap">
              <Grid item zeroMinWidth>
                <Typography gutterBottom variant="h5" noWrap>
                  {product['name']}
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{ justifyContent: 'center' }} wrap="nowrap">
              <Grid item zeroMinWidth>
                <Typography gutterBottom variant="h5" noWrap>
                  {/* Brand */}
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Typography gutterBottom variant="h4">
              £{'price' in product && product.price[2].toFixed(2)}
            </Typography>
          </CardContent>

          <CardActions>
            {/* <Button color="primary">Add to cart</Button> */}
            <Button color="primary">
              <Link href={`/product/detail/${product._id}`} color="inherit">
                More Details
              </Link>
            </Button>
            {isAuthenticated ? (
              <>
                <Button onClick={handleAddToBasket}>Add to Basket</Button>
                <FormControl>
                  <FormLabel>Size?</FormLabel>
                  <Select native>
                    <option aria-label="None" value=""></option>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                    <option value={'6'}>6</option>
                    <option value={'7'}>7</option>
                    <option value={'8'}>8</option>
                    <option value={'9'}>9</option>
                    <option value={'10'}>10</option>
                    <option value={'11'}>11</option>
                  </Select>
                </FormControl>
              </>
            ) : (
              <Button disabled>Add to Basket</Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
