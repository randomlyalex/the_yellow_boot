import { Divider, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';

const ResultsHeader = () => {
  return (
    <header>
      <Hidden xsDown>
        <Grid
          container
          spacing={4}
          justify="center"
          style={{ paddingTop: '25px' }}
          zeroMinWidth>
          <Grid xs={8} noWrap>
            <Typography noWrap> Womens Shoes</Typography>
          </Grid>

          <Grid xs={8}>
            <Divider></Divider>
          </Grid>

          <Grid xs={8}>
            <p>
              Shop the latest collection of women's shoes at schuh. Our range of
              women’s trainers and boots will have you spoiled for choice from
              sporty street-style women’s Nike to statement Dr. Martens. In need
              of a sky-high fit? We have an array of heeled shoes for women to
              ensure you find your perfect party fit. With the latest arrivals
              from your favourite brands including Vans and Converse, stay on
              top of the latest trends all year round. Order ladies shoes before
              10pm* for Next Day UK Delivery.
            </p>
          </Grid>
        </Grid>
      </Hidden>
    </header>
  );
};

export default ResultsHeader;
