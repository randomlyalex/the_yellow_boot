import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import image1 from '../static/img/1.jpg';
import image2 from '../static/img/2.jpg';
import image3 from '../static/img/3.jpg';

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

const ProductDetail = () => {
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
                <img src={image1} className={classes.bigPic} />
              </Grid>
            </Grid>
            <Hidden xsDown>
              <Grid container>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src={image2} className={classes.smallPic} />
                </Grid>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src={image1} className={classes.smallPic} />
                </Grid>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src={image3} className={classes.smallPic} />
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={12}>
            Dr Martens
          </Grid>
          <Grid item xs={12}>
            Description
          </Grid>
          <Grid item xs={12}>
            £89.00
          </Grid>
          <Grid item xs={6}>
            Size Drop Down
          </Grid>
          <Grid item xs={6}>
            Stock
          </Grid>
          <Grid item xs={12}>
            Size Guide
          </Grid>
          <Grid item xs={12}>
            Att to Basket
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
