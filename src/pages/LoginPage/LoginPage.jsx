//src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'; // Импортируем компонент формы

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />  {/* Здесь рендерим компонент формы */}
    </div>
  );
};

export default LoginPage;
