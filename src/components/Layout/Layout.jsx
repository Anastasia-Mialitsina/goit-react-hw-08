// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
