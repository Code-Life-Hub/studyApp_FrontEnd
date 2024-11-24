import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  // If statement handling the visibility of the hamburger button
  React.useEffect(() => {
    const button = document.querySelector(".hamburger-btn");
    if (button) {
      button.style.visibility = isNavVisible ? "hidden" : "visible";
    }
  }, [isNavVisible]);

  return (
    <header className="App-header">
      <button
        onClick={toggleNav}
        className="hamburger-btn"
        title="Click to Open Menu"
      >
        ☰
      </button>
      {isNavVisible && (
        <nav className="nav-menu">
          <ul className="nav">
            <li className="navLink">
              <Link className="navLink" to="/">
                Home
              </Link>
            </li>
            <li className="navLink">
              <Link className="navLink" to="/userRegister">
                Register
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleNav}
            className="closeNavButton"
            title="Click to Close Menu"
          >
            X
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
