import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/Footer.css";
import Footer from "./components/utils/Footer";
import CookiesConsent from "./components/utils/CookiesConsent";
import ScrollToTop from "./components/utils/ScrollToTop";
import ShowPsw from "./components/utils/ShowPsw";
import Header from "./components/utils/Header";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  // State to handle the visibility of the nav menu
  // If statement handling the visibility of the hamburger button
  useEffect(() => {
    const button = document.querySelector(".hamburger-btn");
    if (button) {
      button.style.visibility = isNavVisible ? "hidden" : "visible";
    }
  }, [isNavVisible]);
  return (
    <>
      <button
        onClick={toggleNav}
        className="hamburger-btn"
        title="Click to Open Menu"
      >
        ☰
      </button>
      <Header isNavVisible={isNavVisible} toggleNav={toggleNav} />


      <main className="App-body">
        <div className="App">
          <form action="" method="POST" className="login" id="login">
            <h1 className="PageTitle">Login</h1>
            <br></br>
            <div className="UserLogin">
              <label className="username_or_email">User:</label>
              <input
                className="username_or_email"
                type="text"
                id="username_or_email"
                // autoComplete="off" // I am leaving this here in case I change my mind.
                autoCorrect="off"
                autoCapitalize="off"
                required
              />
              <label className="password">Password:</label>
              <input
                className="password"
                type="password"
                id="password"
                // autoComplete="off" // I am leaving this here in case I change my mind.
                autoCorrect="off"
                autoCapitalize="off"
                required
              />
              <div className="ShowPsw">
                <label className="password">Show Password</label>
                <input
                  className="ShowPswCb"
                  type="checkbox"
                  onClick={ShowPsw}
                />
              </div>
            </div>
            <br></br>
            {/* <!-- Created Remember Me Checkbox --> */}
            <div className="rememberMe">
              <label className="rememberme">Keep Me Logged In</label>
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
              <div className="registerButton">
                <button className="register" type="submit" id="register">
                  Create Account
                </button>
              </div>
              <div className="loginButton">
                <button
                  type="submit"
                  className="login"
                  id="Login"
                  value="Login"
                >
                  Login
                </button>
              </div>
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
        </div>
      </main>
      <ScrollToTop />
      <CookiesConsent />
      <Footer />
    </>
  );
}
export default App;
