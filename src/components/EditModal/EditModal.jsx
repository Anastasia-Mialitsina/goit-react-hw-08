// src/components/EditModal/EditModal.jsx
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./EditModal.module.css";

const EditModal = ({ isOpen, onClose, contact, onConfirm }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setNumber(contact.number);
    }
  }, [contact]);

  const handleSubmit = () => {
    const updatedContact = { name, number };
    onConfirm(updatedContact); 
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <h2>Редактировать контакт</h2>
      <div>
        <label>Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Телефон</label>
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <button onClick={handleSubmit} className={style.saveBtn}>
          Сохранить
        </button>
        <button onClick={onClose} className={style.cancelBtn}>
          Отмена
        </button>
      </div>
    </Modal>
  );
};

export default EditModal;
