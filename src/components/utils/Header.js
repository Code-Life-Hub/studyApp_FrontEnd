import React, { useState } from "react";
import AppRouter from "../routes/AppRouter";
import "../../styles/App.css";

function Header() {
  // State to handle the visibility of the nav menu
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  // If statement handling the visibility of the hamburger button
  React.useEffect(() => {
    const button = document.querySelector(".hamburger-btn");
    if (button) {
      button.style.visibility = isNavVisible ? "hidden" : "visible";
    }
  }, [isNavVisible]);
  // rendering below
  return (
    <header className="App-header">
      <button
        onClick={toggleNav}
        className="hamburger-btn"
        title="Click to Open Menu"
      >
        ☰
      </button>

      <AppRouter isNavVisible={isNavVisible} toggleNav={toggleNav} />

    </header>
  );
}

export default Header;
