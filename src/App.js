import React from 'react';
import { Dashboard, Error } from './pages';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Switch>
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
