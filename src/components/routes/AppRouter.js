import React from "react";
import { Link, Routes, Route } from "react-router-dom"; // Remove BrowserRouter import
import App from "../../App";

function AppRouter() {
  return (
    <div className="routerNav">
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
    </div>
  );
}

export default AppRouter;
