import { Grid } from '@material-ui/core';
import React from 'react';

const HeroSlider = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <img src="/public/img/front2.png" alt="2" />
        </Grid>
        <Grid item>
          <img src="/public/img/front1.png" alt="1" />
        </Grid>
        <Grid item>
          <img src="/public/img/front3.png" alt="3" />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSlider;
