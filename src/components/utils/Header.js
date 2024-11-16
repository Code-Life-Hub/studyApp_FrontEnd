import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";

function Header({ isNavVisible, toggleNav }) {
  return (
    <header className="App-header">
      <h1
        onClick={() => (window.location.href = "/")}
        className="header-primary"
        title="Study App"
      >
        Study App
      </h1>
      {/* Hamburger Button */}
      <button
        onClick={toggleNav}
        className="hamburger-btn"
        title="Click to Open Menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <nav className={`navLinks ${isNavVisible ? "" : "hidden"}`}>
        <Link to="/" className="linkAnchor" title="Home">
          Home
        </Link>
      </nav>
    </header>
  );
}

export default Header;
