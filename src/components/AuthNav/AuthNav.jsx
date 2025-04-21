//src/components/AuthNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={css.authNav}>
      <Link to="/register" className={css.link}>
        Register
      </Link>
      <Link to="/login" className={css.link}>
        Log In
      </Link>
    </nav>
  );
};

export default AuthNav;
