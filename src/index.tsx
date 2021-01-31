import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import App from './App';
import { rrfProps } from './Firebase';
import AuthSplash from './Firebase/AuthSplash';
import store from './Redux/store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <ReactReduxFirebaseProvider {...rrfProps}>
    <React.StrictMode>
      <Provider store={store}>
        <AuthSplash>
          <App />
        </AuthSplash>
      </Provider>
    </React.StrictMode>
  </ReactReduxFirebaseProvider>,
  document.getElementById('root'),
);

serviceWorkerRegistration.unregister();
reportWebVitals();
