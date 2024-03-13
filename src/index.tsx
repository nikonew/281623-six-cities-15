import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app/app';
import { offers } from './mocks/mock';
import { comments } from './mocks/mock-comments';
import { AuthorizationStatus } from './app/router/router/router';

const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers = {offers} comments={comments} authorizationStatus= {authorizationStatus}/>
  </React.StrictMode>
);
