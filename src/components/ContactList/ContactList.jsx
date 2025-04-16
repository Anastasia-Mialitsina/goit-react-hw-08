// import React from "react";
// import { useSelector } from "react-redux";
// import {
//   selectFilteredContacts,
//   selectLoading,
//   selectError,
// } from "../../redux/contactsSlice";
// import style from './ContactList.module.css';
// const ContactList = () => {
//   const filteredContacts = useSelector(selectFilteredContacts);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

  

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {filteredContacts.map((contact) => (
//         <li key={contact.id} className={style.list}>
//           {contact.name} - {contact.phone}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import style from "./ContactList.module.css";

  const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={style.list}>
      {filteredContacts.map((contact) => (

        <li key={contact.id} className={style.contactItem}>
          <div className={style.contactInfo}>
            <p className={style.name}>{contact.name}</p>
            <p className={style.phone}>{contact.number}</p>
          </div>
          <button
            className={style.deleteBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
