import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
  // {...rest } means for example in dashboard route we get ()

  // <Route path='/' exact>
  //         <Dashboard />
  //       </Route>

  //       dashboard as children and everything inside the route like path we get as ...rest
  const {
    isAuthenticated,

    user,
  } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <Route
      {...rest}
      render={() => (isUser ? children : <Redirect to='login' />)}
    ></Route>
  );
};
export default PrivateRoute;
