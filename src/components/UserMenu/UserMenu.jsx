//src/components/UserMenu.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUserEmail } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail); 

  const handleLogOut = () => {
    dispatch(logOut()); 
  };

  return (
    <div className={css.userMenu}>
      <p className={css.email}>Welcome, {userEmail}</p>
      <button className={css.logoutBtn} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
