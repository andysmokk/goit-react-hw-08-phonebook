import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

console.log(axios.defaults.baseURL);

export const postAddContact = createAsyncThunk(
  'addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await axios.post(`contacts`, contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchContacts = createAsyncThunk(
  'fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
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
      await axios.delete(`contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
