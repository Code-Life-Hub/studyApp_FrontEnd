import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../../App";
import UserRegister from "../users/UserRegister";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/userRegister" element={<UserRegister />} />
    </Routes>
  );
}

export default AppRouter;
