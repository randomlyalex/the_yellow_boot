import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { getOrders as listOrders } from '../redux/actions/orderActions';

const UserDetailsContainer = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  return (
    <Grid container justify="center">
      <Grid item>
        <p>Address' can be added and removed from here.</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p> Change password link</p>
      </Grid>
    </Grid>
  );
};

export default UserDetailsContainer;
