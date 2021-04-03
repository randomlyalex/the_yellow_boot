import { Divider, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';

const BasketHeader = () => {
  return (
    <header>
      <Grid
        container
        spacing={4}
        justify="center"
        style={{ paddingTop: '5px', margin: '5px' }}
        zeroMinWidth>
        <Grid xs={8} noWrap>
          <Typography noWrap> Basket</Typography>
        </Grid>
        <Hidden xsDown>
          <Grid xs={8}>
            <Divider></Divider>
          </Grid>

          <Grid xs={8}>
            <p>Some text about the basket</p>
          </Grid>
        </Hidden>
      </Grid>
    </header>
  );
};

export default BasketHeader;
