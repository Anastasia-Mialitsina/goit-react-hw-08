// src/components/AppBar.jsx
import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; // Импортируем селектор для проверки логина

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Получаем статус авторизации пользователя

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}{" "}
      {/* Отображаем компоненты в зависимости от статуса авторизации */}
    </header>
  );
};

export default AppBar;
