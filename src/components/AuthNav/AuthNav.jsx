//src/components/AuthNav.jsx
import React from "react";
import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );
};

export default AuthNav;
