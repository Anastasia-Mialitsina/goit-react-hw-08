// src/components/Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link
        to="/"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Home
      </Link>
      <Link
        to="/contacts"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Contacts
      </Link>
    </nav>
  );
};

export default Navigation;
