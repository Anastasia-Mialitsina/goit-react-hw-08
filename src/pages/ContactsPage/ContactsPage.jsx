//src/pages/ContactsPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations"; // Операция для получения контактов
import ContactList from "../../components/ContactList/ContactList"; // Компонент для отображения списка контактов
import AddContact from "../../components/AddContact/AddContact"; // Компонент для добавления нового контакта
import ContactFilter from "../../components/ContactFilter/ContactFilter"; // Компонент для фильтрации контактов
import Loader from "../../components/Loader/Loader"; // Компонент для отображения загрузки

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
      <AddContact />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
