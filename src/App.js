import React from "react";
import "./styles/App.css";
import Footer from "./components/utils/Footer";
//eslint-disable-next-line
import CookiesConsent from "./components/utils/CookiesConsent";
import ScrollToTop from "./components/utils/ScrollToTop";
import ShowPsw from "./components/utils/ShowPsw";

function App() {
  return (
    <header className="App-header">
      <div className="App">
        <form action="" method="POST" className="login" id="login">
          <h1 className="PageTitle">Login</h1>
          <br></br>
          <div className="UserLogin">
            <label htmlFor="username_or_email">User:</label>
            <input
              className="username_or_email"
              type="text"
              id="username_or_email"
              // autoComplete="off" //I am leaving this here in case I change my mind.
              autoCorrect="off"
              autoCapitalize="off"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              className="password"
              type="password"
              id="password"
              // autoComplete="off" //I am leaving this here in case I change my mind.
              autoCorrect="off"
              autoCapitalize="off"
              required
            />
            <div className="ShowPsw">
              <label htmlFor="password">Show Password</label>
              <input className="ShowPswCb" type="checkbox" onClick={ShowPsw} />
            </div>
          </div>
          <br></br>
          {/* <!-- Created Remember Me Checkbox --> */}
          <div className="rememberMe">
            <label htmlFor="rememberme">Keep Me Logged In</label>
            <input
              type="checkbox"
              className="rememberme"
              id="rememberme"
              value="yes"
            />
          </div>
          <br />
          <br></br>

          <div className="Login-Register">
            <input
              type="submit"
              className="register"
              id="register"
              value="Create Account"
            />
            <input type="submit" className="login" id="Login" value="Login" />
          </div>
          <br></br>

          {/* <!-- Added Password Reset button to login --> */}
          <div className="pass-reset">
            <a href="pass_rst" className="ForgotPsw">
              {/* This needs its ref redefined when counterpart is complete. Forgot
              Password? */}
              Forgot Password?{" "}
            </a>
          </div>
        </form>
        <CookiesConsent />
        <ScrollToTop />
        <Footer />
      </div>
    </header>
  );
}

export default App;
