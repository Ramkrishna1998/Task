import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Authentication = ({ isAuth: isAuth, component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
      }}
    />
  );
};
export default Authentication;
