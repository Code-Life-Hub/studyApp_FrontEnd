import React from "react";
import "./styles/App.css";
import Footer from "./components/utils/Footer";
//eslint-disable-next-line
import CookiesConsent from "./components/utils/CookiesConsent";
import ScrollToTop from "./components/utils/ScrollToTop";



function App() {
  return (
    <header className="App-header">
      <div className="App">
        <form
          action=""
          method="POST"
          name="login"
          id="login"
          className="login-form"
        >
          <h1>Login</h1>
          <div className="use-pass">
            <label htmlFor="username_or_email">Username or Email</label>
            <input
              name="username_or_email"
              type="text"
              id="username_or_email"
              // autoComplete="off" //I am leaving this here in case I change my mind.

              autoCorrect="off"
              autoCapitalize="off"
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              // autoComplete="off" //I am leaving this here in case I change my mind.
              autoCorrect="off"
              autoCapitalize="off"
            />
          </div>
          {/* <!-- Created Remember Me Checkbox --> */}
          <div className="form-row">
            <label htmlFor="rememberme">Keep Me Logged In</label>
            <input
              type="checkbox"
              name="rememberme"
              id="rememberme"
              value="yes"
            />
            <br />
            <input
              type="submit"
              name="login"
              id="Login"
              value="Login"
              className="btn btn-primary btn-width-full"
            />
          </div>
          {/* <!-- Added Password Reset button to login --> */}
          <div className="pass-reset">
            <a href="pass_rst" className="btn btn-primary btn-width-full">
              {/* This needs its ref redefined when counterpart is complete. Forgot
              Password? */}
              {" "}
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
