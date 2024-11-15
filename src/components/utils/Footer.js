import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p
        className="trademark-footer"
        title="Trademark - © 2024 David Wright. All rights reserved."
      >
        © {new Date().getFullYear()}{" "}
        <a className="footerEmail"href="mailto:David.Wright.Developer@gmail.com">David Wright</a>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
