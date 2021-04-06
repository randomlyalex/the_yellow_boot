import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Hidden from '@material-ui/core/Hidden';
// import image1 from '../static/img/1.jpg';
// import image2 from '../static/img/2.jpg';
// import image3 from '../static/img/3.jpg';

import Select from '@material-ui/core/Select';

//Actions
import { getProductById } from '../redux/actions/productActions';
import { addToBasket } from '../redux/actions/basketActions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  bigPic: {
    maxWidth: '400px',
  },
  smallPic: {
    maxWidth: '150px',
  },
}));

const ProductDetail = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { isAuthenticated, user, isLoading: userLoading } = useSelector(
    (state) => state.auth
  );

  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;

  useEffect(() => {
    if (product && match.params.pid !== product._id) {
      dispatch(getProductById(match.params.pid));
    }
  }, [dispatch, match, product]);

  const handleAddToBasket = () => {
    isAuthenticated && dispatch(addToBasket(user._id, product._id, qty));
  };

  const classes = useStyles();
  return (
    <>
      {/* Big picture */}
      {/* smaller sub pictures to the side cycle through */}
      {/* Title */}
      {/* description */}
      {/* Price */}
      {/* Stock levels on size drop down? */}
      {/*  Link / popover to size guide */}
      {/* Add to basket */}
      {/* Social share buttons on the main page */}

      <Grid container>
        <Grid container item xs={12} sm={6}>
          <Grid container item>
            <Grid container>
              <Grid item xs={12} sm={8} className={classes.bigPic}>
                <img src="/public/img/1.jpg" className={classes.bigPic} />
              </Grid>
            </Grid>
            <Hidden xsDown>
              <Grid container>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src="/public/img/2.jpg" className={classes.smallPic} />
                </Grid>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src="/public/img/3.jpg" className={classes.smallPic} />
                </Grid>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src="/public/img/4.jpg" className={classes.smallPic} />
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={12}>
            {product.name}
          </Grid>
          <Grid item xs={12}>
            {product.description}
          </Grid>
          <Grid item xs={12}>
            £ {'price' in product && product.price[2].toFixed(2)}
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <Select native>
                <option aria-label="None" value="">
                  Size?
                </option>
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
          </Grid>
          <Grid item xs={6}>
            Stock Remaining: 10
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel>Quantity</FormLabel>
              <Select
                value={qty}
                native
                onChange={(e) => setQty(e.target.value)}>
                <option aria-label="None" value="">
                  Qty?
                </option>
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
          </Grid>
          <Grid item xs={6}>
            {isAuthenticated ? (
              <Button onClick={handleAddToBasket}>Add to Basket</Button>
            ) : (
              <Button disabled>Sign in to Add to Basket</Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
