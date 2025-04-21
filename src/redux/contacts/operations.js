import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../auth/operations";

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const response = await axios.post(API_URL, newContact);
    return response.data;
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    console.log(API_URL); 
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);
