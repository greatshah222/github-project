import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GithubProvider from './context/context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // here github provoder is just our wrapper from use context
  <GithubProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GithubProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
