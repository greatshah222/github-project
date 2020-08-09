import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/login'>
        {' '}
        <Login />
      </Route>
      <Route path='/error'>
        <Error />
      </Route>
      <Route path='/' exact>
        <Dashboard />
      </Route>
      <Redirect to='/error'>
        {' '}
        <Error />
      </Redirect>
    </Switch>
  );
}

export default App;
