import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// console.log(axios.defaults.baseURL);

export const fetchContacts = createAsyncThunk(
  'fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const postAddContact = createAsyncThunk(
  'addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await axios.post(`/contacts`, contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
      // console.log(error.message);
    }
  },
);
