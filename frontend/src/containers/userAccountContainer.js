import React from 'react';

import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

//MaterialUI

//Components
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

//Actions

import OrdersContainer from './OrdersContainer';
import UserDetailsContainer from './UserDetailsContainer';

const UserAccountContainer = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

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
            path="/my-account/my-orders"
            render={() => <OrdersContainer />}
          />
          <Route path="/my-account" render={() => <UserDetailsContainer />} />
        </Switch>
      )}
    </>
  );
};

export default UserAccountContainer;
