import { Grid } from '@material-ui/core';
import React from 'react';
import ProductCard from '../components/ProductCard';
import ResultsHeader from '../components/ResultsHeader';
import ResultsRefine from '../components/ResultsRefine';

const ResultsContainer = () => {
  return (
    <>
      <Grid container>
        <Grid
          container
          item
          xl={2}
          direction="column"
          justify="flex-start"
          alignItems="center">
          <ResultsRefine />
        </Grid>

        <Grid item xl={10} spacing={5} justify="center">
          <ResultsHeader />
          <Grid item container xs={12}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ResultsContainer;
