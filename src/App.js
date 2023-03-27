import logo from './logo.svg';
import './App.css';
import { useAuth, hasAuthParams } from "react-oidc-context";
import Profile from './Profile';
import { useEffect } from 'react';

function App() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
    return <div>Signing you in...</div>;
    case "signoutRedirect":
    return <div>Signing you out...</div>;
  }
  
  if (auth.isLoading) {
    return <h1>Loading...</h1>;
  }
  
  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }
  
  if (auth.isAuthenticated) {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Hello {auth.user?.profile.sub}{" "}
      </p>
      <Profile/>
      <button style={{padding: "0.2em 1em",
      "fontSize":"1em",
      "border": "none",
      "borderRadius": "2em",
      "backgroundColor": "white",
      "cursor": "pointer"}} onClick={() => {auth.removeUser()}}>
      Log out
      </button>
      </header>
      </div>
      );
    }
    
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <button style={{padding: "0.2em 1em",
      "fontSize":"1em",
      "border": "none",
      "borderRadius": "2em",
      "backgroundColor": "white",
      "cursor": "pointer"}} onClick={() => void auth.signinRedirect()}>
      Log in
      </button>
      </header>
      </div>
      );
    }
    
    export default App;
    