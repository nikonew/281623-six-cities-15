import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app/app';
import { comments } from './mocks/mock-comments';
import { AuthorizationStatus } from './app/router/router/router';
import { Provider } from 'react-redux';
import { store } from './store/';

const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App comments={comments} authorizationStatus= {authorizationStatus}/>
    </Provider>
  </React.StrictMode>
);
