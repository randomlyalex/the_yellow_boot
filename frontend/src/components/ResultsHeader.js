import { Divider, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

const ResultsHeader = ({ match }) => {
  const category =
    match.params.cat[0].toUpperCase() + match.params.cat.slice(1).toLowerCase();

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
            <Typography noWrap> {category} Shoes</Typography>
          </Grid>

          <Grid xs={8}>
            <Divider></Divider>
          </Grid>

          <Grid xs={8}>
            <p>
              Shop the latest collection of {category} shoes at the Yellow Boot.
              Our range of
              {category} trainers and boots will have you spoiled for choice
              from sporty street-style {category} Nike to statement Dr. Martens.
              In need of a sky-high fit? We have an array of heeled shoes for
              women to ensure you find your perfect party fit.
            </p>
          </Grid>
        </Grid>
      </Hidden>
    </header>
  );
};

export default ResultsHeader;
