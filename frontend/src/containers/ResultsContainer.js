import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//components
import ProductCard from '../components/ProductCard';
import ResultsHeader from '../components/ResultsHeader';
import ResultsRefine from '../components/ResultsRefine';

//actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const ResultsContainer = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ResultsContainer;
