import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   // addContactRequest,
//   // addContactSuccess,
//   // addContactError,
//   // fetchContactRequest,
//   // fetchContactSuccess,
//   // fetchContactError,
//   // deleteContactRequest,
//   // deleteContactSuccess,
//   // deleteContactError,
// } from './phonebook-actions';

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

// export const postAddContact = contact => async dispatch => {
// dispatch(addContactRequest());

// try {
//   const { data } = await axios.post(
//     'http://localhost:3000/contacts',
//     contact,
//   );
//   dispatch(addContactSuccess(data));
// } catch (error) {
//   dispatch(addContactError(error));
// }
// axios
//   .post('http://localhost:3000/contacts', contact)
//   .then(({ data }) => dispatch(addContactSuccess(data)))
//   .catch(error => dispatch(addContactError(error)));
// };

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get('http://localhost:3000/contacts');
//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// axios
//   .get('http://localhost:3000/contacts')
//   .then(({ data }) => dispatch(fetchContactSuccess(data)))
//   .catch(error => dispatch(fetchContactError(error)));
// };

// export const deleteContact = contactId => async dispatch => {
// dispatch(deleteContactRequest());

// try {
//   await axios.delete(`http://localhost:3000/contacts/${contactId}`);
//   dispatch(deleteContactSuccess(contactId));
// } catch (error) {
//   dispatch(deleteContactError(error));
// }
//   axios
//     .delete(`http://localhost:3000/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => dispatch(deleteContactError(error)));
// };

// export const submitContacts = text => async dispatch => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(text),
//   };

//   dispatch(addContactRequest());

//   return await fetch('http://localhost:3000/contacts', options)
//     .then(response => response.json())
//     .then(data => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };
