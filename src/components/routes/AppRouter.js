import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Maintenance from "./components/utils/maintenance";

function AppRouter({ toggleNav, isNavVisible }) {
  var isUnderMaintenance = true; /* Set to true before starting any maintenance */
  if (isUnderMaintenance === true) {
    return <Maintenance />;
  }

  return (
    <div className="routerNav">
      <Router>
        <nav className={`navLinks ${isNavVisible ? "visible" : "hidden"}`}>
          <div className="linkGroup">
            <Link to="/" onClick={toggleNav} title="Go to Home Page">
              Home
            </Link>

            <Link to="/Account" onClick={toggleNav} title="Account Settings">
              My Work
            </Link>

            <Link to="/Support" onClick={toggleNav} title="Contact Support">
              Contact Support
            </Link>

            <Link
              to="/privacyPolicy"
              onClick={toggleNav}
              title="Privacy Policy"
            >
              Privacy Policy
            </Link>

            <button
              onClick={toggleNav}
              className="closeNavButton"
              title="Click to Close Menu"
            >
              X
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Account" element={<AccountInfo />} />
          <Route path="/Support" element={<UserSupport />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Maintenance" element={<Maintenance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
