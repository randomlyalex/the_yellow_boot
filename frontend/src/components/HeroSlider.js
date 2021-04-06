import { Grid } from '@material-ui/core';
import React from 'react';

const HeroSlider = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <img src="/public/img/front2.png" />
        </Grid>
        <Grid item>
          <img src="/public/img/front1.png" />
        </Grid>
        <Grid item>
          <img src="/public/img/front3.png" />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSlider;
