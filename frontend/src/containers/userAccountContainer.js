import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

//MaterialUI
import Button from '@material-ui/core/Button';

//Components
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

//Actions
import { logout } from '../redux/actions/authActions';
import OrdersContainer from './OrdersContainer';
import UserDetailsContainer from './UserDetailsContainer';

const UserAccountContainer = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {!isAuthenticated ? (
        <Switch>
          <Route exact path="/my-account/sign-up" render={() => <SignUp />} />
          <Route path="/my-account" render={() => <SignIn />} />
        </Switch>
      ) : (
        <Switch>
          <Route
            path="/my-account/my-details"
            render={() => <UserDetailsContainer />}
          />
          <Route path="/my-account" render={() => <OrdersContainer />} />
        </Switch>
      )}
    </>
  );
};

export default UserAccountContainer;
