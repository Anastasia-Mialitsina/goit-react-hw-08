// src/redux/contacts/selectors.js
import { createSelector } from "reselect";
import { selectContacts } from "./slice";

export const selectFilteredContacts = createSelector(
  [
    selectContacts, 
    (state) => state.filters.name,
  ],
  (contacts, filterName) => {
    if (!filterName) return contacts; 
    return contacts.filter(
      (contact) => contact.name.toLowerCase().includes(filterName.toLowerCase()) 
    );
  }
);
