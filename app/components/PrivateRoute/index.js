import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { readCookie } from '../../utils/cookieHandler';

function PrivateRoute(props) {
  const { component: RenderComponent, ...rest } = props;
  return (
    <Route
      {...rest}
      render={prop =>
        readCookie('token') ? (
          <RenderComponent {...prop} />
        ) : (
          <Redirect
            to={{
              pathname: '/signup',
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default withRouter(PrivateRoute);
