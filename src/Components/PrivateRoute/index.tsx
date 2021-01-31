/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const auth = useSelector((state: any) => state.firebase.auth);
  const isLoggedIn = isLoaded(auth) && !isEmpty(auth);
  return (
    <Route
      render={({ location }) =>
        isLoggedIn ? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
