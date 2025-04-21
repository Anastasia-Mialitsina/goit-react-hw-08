//src/components/LoginForm.jsx
import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations"; 
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(logIn(values));
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <div>
        <label className={css.form} htmlFor="email">
          Email
        </label>
        <input
          className={css.input}
          id="email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label className={css.form} htmlFor="password">
          Password
        </label>
        <input
          className={css.input}
          id="password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <button className={css.btn} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
