// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
