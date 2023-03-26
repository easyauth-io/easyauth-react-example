import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "react-oidc-context";


const onSigninCallback = () => {
     window.history.replaceState(
         {},
         document.title,
         window.location.pathname
     )
}
const oidcConfig = {
  authority: process.env.REACT_APP_EASYAUTH_APP_URL + "/tenantbackend",
  client_id: process.env.REACT_APP_EASYAUTH_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_EASYAUTH_REDIRECT_URL,
  onSigninCallback: onSigninCallback
};



console.log(oidcConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
