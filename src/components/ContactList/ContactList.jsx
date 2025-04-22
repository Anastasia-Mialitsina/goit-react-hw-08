// src/components/ContactList.jsx
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   selectFilteredContacts,
//   selectLoading,
//   selectError,
// } from "../../redux/contacts/slice";
// import { deleteContact } from "../../redux/contacts/operations";
// import DeleteModal from "../DeleteModal/DeleteModal"; 
// import { toast } from "react-hot-toast";
// import style from "./ContactList.module.css";

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const filteredContacts = useSelector(selectFilteredContacts);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   const [isModalOpen, setIsModalOpen] = useState(false); 
//   const [contactToDelete, setContactToDelete] = useState(null); 

//   const handleDeleteClick = (id) => {
//     setContactToDelete(id); 
//     setIsModalOpen(true); 
//   };

//   const handleDeleteConfirm = () => {
//     dispatch(deleteContact(contactToDelete))
//       .then(() => {
//         toast.success("Контакт успешно удален!");
//         setIsModalOpen(false); 
//       })
//       .catch(() => {
//         toast.error("Ошибка при удалении контакта!");
//         setIsModalOpen(false); 
//       });
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); 
//     setContactToDelete(null); 
//   };

//   if (loading) return <Loader />;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <ul className={style.list}>
//         {filteredContacts.map((contact) => (
//           <li key={contact.id} className={style.contactItem}>
//             <div className={style.contactInfo}>
//               <p className={style.name}>{contact.name}</p>
//               <p className={style.phone}>{contact.number}</p>
//             </div>
//             <button
//               className={style.deleteBtn}
//               onClick={() => handleDeleteClick(contact.id)} // Открываем модалку
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       <DeleteModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onConfirm={handleDeleteConfirm}
//       />
//     </>
//   );
// };

// export default ContactList;

// src/components/ContactList.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/slice";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal"; 
import { toast } from "react-hot-toast";
import style from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [contactToEdit, setContactToEdit] = useState(null); 

  const handleDeleteClick = (id) => {
    setContactToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteContact(contactToDelete))
      .then(() => {
        toast.success("Контакт успешно удален!");
        setIsDeleteModalOpen(false);
      })
      .catch(() => {
        toast.error("Ошибка при удалении контакта!");
        setIsDeleteModalOpen(false);
      });
  };

  const handleEditClick = (contact) => {
    setContactToEdit(contact); 
    setIsEditModalOpen(true); 
  };

  const handleEditConfirm = (updatedContact) => {
    dispatch(editContact({ id: contactToEdit.id, updatedContact }))
      .then(() => {
        toast.success("Контакт успешно обновлен!");
        setIsEditModalOpen(false);
      })
      .catch(() => {
        toast.error("Ошибка при обновлении контакта!");
        setIsEditModalOpen(false);
      });
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
    setContactToDelete(null);
    setContactToEdit(null);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <ul className={style.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={style.contactItem}>
            <div className={style.contactInfo}>
              <p className={style.name}>{contact.name}</p>
              <p className={style.phone}>{contact.number}</p>
            </div>
            <button
              className={style.deleteBtn}
              onClick={() => handleDeleteClick(contact.id)} 
            >
              Delete
            </button>
            <button
              className={style.deleteBtn}
              onClick={() => handleEditClick(contact)} 
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleDeleteConfirm}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        contact={contactToEdit}
        onConfirm={handleEditConfirm} 
      />
    </>
  );
};

export default ContactList;

