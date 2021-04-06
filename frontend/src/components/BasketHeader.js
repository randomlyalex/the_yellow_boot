import React from 'react';

//Material UI
import { Divider, Grid, Hidden, Typography } from '@material-ui/core';

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
            <p>
              Don't forget to check your mail for the latest updates and promos!
            </p>
          </Grid>
        </Hidden>
      </Grid>
    </header>
  );
};

export default BasketHeader;
