// src/components/DeleteModal.jsx
import React from "react";
import Modal from "react-modal";
import style from "./DeleteModal.module.css";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <h2>Подтвердите удаление</h2>
      <p>Вы уверены, что хотите удалить этот контакт?</p>
      <div>
        <button onClick={onConfirm} className={style.deleteBtn}>
          Удалить
        </button>
        <button onClick={onClose} className={style.cancelBtn}>
          Отмена
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
