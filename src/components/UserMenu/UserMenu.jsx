//src/components/UserMenu.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUserEmail } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail); // Получаем email пользователя

  const handleLogOut = () => {
    dispatch(logOut()); // Диспатчим действие выхода
  };

  return (
    <div>
      <p>Welcome, {userEmail}</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default UserMenu;
