import logo from "./logo.svg";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  useEasyauth,
  useUser,
} from "@easyauth.io/easyauth-react";
import Profile from "./profile";

function App() {
  const auth = useEasyauth();
  const { isAuthenticated, user, isLoading } = useUser();

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

  return (
    <>
      <SignedIn>
        <div className="App">
          <header className="App-header">
            <div className="Usr-btn">
              <UserButton />
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello {user.email} </p>
            <Profile/>
          </header>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <button
              className="btn-style"
              onClick={() => void auth.signinRedirect()}
            >
              Log in
            </button>
          </header>
        </div>
      </SignedOut>
    </>
  );
}

export default App;
