import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../../styles/App.css";
import App from "../../App";

function AppRouter() {
  return (
    <nav className="routerNav">
      <div className="linkGroup">
        <Link to="/" title="Go to Home Page">
          Home
        </Link>
        <button className="closeNavButton" title="Click to Close Menu">
          X
        </button>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </nav>
  );
}

export default AppRouter;
