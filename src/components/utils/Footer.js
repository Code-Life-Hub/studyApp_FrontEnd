import React, { useState, useEffect } from "react";
import "../../styles/Footer.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true); // Show by default

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;
      const triggerHeight = scrollHeight * 0.95; //Footer will only display once 95% of the page has been scrolled by user.

      // If the content is taller than the viewport and we haven't scrolled past 75%,
      // hide the footer. Otherwise, show it.
      if (scrollHeight > window.innerHeight && currentScroll < triggerHeight) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
    };

    // Check right away without waiting for a scroll event
    handleScroll();

    // Then add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showFooter && (
      <p
        className="trademark-footer"
        title="Trademark - © 2024 David Wright. All rights reserved."
      >
        © {new Date().getFullYear()} David Wright. All rights reserved.
      </p>
    )
  );
};

export default Footer;
