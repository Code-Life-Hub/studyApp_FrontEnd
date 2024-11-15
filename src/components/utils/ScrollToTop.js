import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleShowButton = () => {
    // Assuming you want to show the button after scrolling down 50% of the page
    const displayAfter = window.innerHeight / 2;
    if (window.scrollY > displayAfter) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowButton);
    // Cleanup the listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        className="backToTop"
        onClick={scrollToTop}
        style={scrollButtonStyle}
      >
        🔝
      </button>
    )
  );
};

const scrollButtonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "0px",
  background: "white",
  fontSize: "20px",
  zIndex: "1000",
  cursor: "pointer",
};

export default ScrollToTop;
