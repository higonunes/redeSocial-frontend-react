import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import Template from '../pages/Template/index';

interface RouteProps extends ReactDOMRouteProps {
  isPublic?: boolean;
  component: React.ComponentType;
}
const Route: React.FC<RouteProps> = ({
  isPublic = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return !!user === !isPublic ? (
          <Template>
            <Component />
          </Template>
        ) : (
          <Redirect
            to={{
              pathname: isPublic ? '/dashboard' : '/',
              location: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
