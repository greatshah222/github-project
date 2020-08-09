import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GithubProvider from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <GithubProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GithubProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
