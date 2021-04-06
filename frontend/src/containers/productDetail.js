import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import Hidden from '@material-ui/core/Hidden';

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

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
  const [imgRotate, setImgRotate] = useState(0);
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
            <Hidden xsDown>
              <Grid container>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  {product.imageUrls && (
                    <img
                      src={product.imageUrls[(imgRotate + 1) % 4]}
                      className={classes.smallPic}
                    />
                  )}
                </Grid>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  {product.imageUrls && (
                    <img
                      src={product.imageUrls[(imgRotate + 2) % 4]}
                      className={classes.smallPic}
                    />
                  )}
                </Grid>
                <Hidden smDown>
                  <Grid item xs={0} sm={4} className={classes.smallPic}>
                    {product.imageUrls && (
                      <img
                        src={product.imageUrls[(imgRotate + 3) % 4]}
                        className={classes.smallPic}
                      />
                    )}
                  </Grid>
                </Hidden>
              </Grid>
            </Hidden>
            <Grid container>
              <Grid item xs={12} sm={8} className={classes.bigPic}>
                {product.imageUrls && (
                  <img
                    src={product.imageUrls[imgRotate % 4]}
                    className={classes.bigPic}
                    onClick={() => setImgRotate((imgRotate + 1) % 4)}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={12}>
            <Typography variant="h2">{product.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">{product.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">
              £ {'price' in product && product.price[2].toFixed(2)}
            </Typography>
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
              <Button
                onClick={handleAddToBasket}
                variant="contained"
                color="primary">
                Add to Basket
              </Button>
            ) : (
              <Button disabled variant="outlined" color="primary">
                Sign in to Add to Basket
              </Button>
            )}
          </Grid>
          <Grid item xs={12}>
            <EmailShareButton url={window.location.href}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
