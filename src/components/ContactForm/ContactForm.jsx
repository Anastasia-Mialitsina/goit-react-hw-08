import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import style from './ContactForm.module.css';

  const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;

    dispatch(addContact({ name, number })); 

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={style.div}>
      <input
        className={style.input}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={style.input}
        type="tel"
        placeholder="Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button className={style.btn} type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
