//src/pages/ContactsPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations"; 
import ContactList from "../../components/ContactList/ContactList"; 
import ContactForm from "../../components/ContactForm/ContactForm"; 
import ContactFilter from "../../components/ContactFilter/ContactFilter"; 
import Loader from "../../components/Loader/Loader"; 

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts?.loading);
  const error = useSelector((state) => state.contacts?.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Contacts</h1>
      <ContactFilter />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
