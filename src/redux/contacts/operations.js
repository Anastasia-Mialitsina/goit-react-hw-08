// src/redux/contacts/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../auth/operations";

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const response = await axios.post("/contacts", newContact);
    return response.data;
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await axios.get("/contacts");
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, updatedContact }) => {
    const response = await axios.patch(`/contacts/${id}`, updatedContact);
    return response.data; 
  }
);
