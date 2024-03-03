import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app/app';
import { offers } from './mocks/mock';
import { AuthorizationStatus } from './app/router/router/router';

const authorizationStatus = AuthorizationStatus.NoAuth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers = {offers} authorizationStatus= {authorizationStatus} />
  </React.StrictMode>
);
