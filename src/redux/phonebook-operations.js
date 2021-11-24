import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postAddContact = createAsyncThunk(
  'addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await axios.post('http://localhost:3000/contacts', contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchContacts = createAsyncThunk(
  'fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('http://localhost:3000/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3000/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
