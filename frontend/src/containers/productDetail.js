import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import image1 from '../static/img/1.jpg';
import image2 from '../static/img/2.jpg';
import image3 from '../static/img/3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
  },
  bigPic: {
    maxWidth: '30vw',
  },
  smallPic: {
    maxWidth: '15vw',
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
          <Grid Grid container direction="column">
            <Grid container item direction="column">
              <Hidden xsDown>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src={image2} className={classes.smallPic} />
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src={image1} className={classes.smallPic} />
                </Grid>
              </Hidden>

              <Hidden xsDown>
                <Grid item xs={0} sm={4} className={classes.smallPic}>
                  <img src={image3} className={classes.smallPic} />
                </Grid>
              </Hidden>
            </Grid>

            <Grid direction="column">
              <Grid item xs={12} sm={8} className={classes.bigPic}>
                <img src={image1} className={classes.bigPic} />
              </Grid>
            </Grid>
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
