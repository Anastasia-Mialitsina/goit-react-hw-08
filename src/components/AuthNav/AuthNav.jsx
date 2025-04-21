// src/components/AuthNav.jsx
import React from "react";
import { NavLink } from "react-router-dom"; // исправлено
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={css.authNav}>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
