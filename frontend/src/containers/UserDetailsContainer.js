import { Grid } from '@material-ui/core';
import React from 'react';

import { useSelector } from 'react-redux';

const UserDetailsContainer = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Grid container justify="center">
      <Grid item>
        {user && (
          <>
            <p>Address' can be added and removed from here.</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p> Change password link</p>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default UserDetailsContainer;
