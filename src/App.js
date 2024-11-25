import React from "react";
import "./styles/App.css";
import "./styles/Footer.css";
import Footer from "./components/utils/Footer";
import CookiesConsent from "./components/utils/CookiesConsent";
import ScrollToTop from "./components/utils/ScrollToTop";
import Header from "./components/utils/Header";

function App() {
  return (
    <>
      <Header />
      <main className="App-body">
        <div className="App">
          <form action="" method="GET" className="login" id="login">
            <h1 className="PageTitle">Login</h1>
            <br />
            <div className="UserLogin">
              <label className="username_or_email">User</label>
              <input
                className="username_or_email"
                type="text"
                id="username_or_email"
                autoCorrect="off"
                autoCapitalize="off"
              />
              <label className="password">Password</label>
              <input
                className="passwordLogin"
                type="password"
                id="password"
                autoCorrect="off"
                autoCapitalize="off"
                autofill="on"
              />
              <div className="ShowPsw">
                <label className="ShowPassword" htmlFor="showPasswordCheckbox">
                  Show Password
                </label>
                <input
                  id="showPasswordCheckbox" // Match the id here
                  className="ShowPswCb"
                  type="checkbox"
                  onChange={(e) => {
                    const passwordInput = document.getElementById("password");
                    if (passwordInput) {
                      passwordInput.type = e.target.checked
                        ? "text"
                        : "password";
                    }
                  }}
                />
              </div>
            </div>
            <br />
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
            <div className="Login-Register">
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
            <br />
            <div className="pass-reset">
              <a href="/pass_rst" className="ForgotPsw">
                Forgot Password?
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
