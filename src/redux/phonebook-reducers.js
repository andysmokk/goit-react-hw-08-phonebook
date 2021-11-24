import { createReducer } from '@reduxjs/toolkit';
import {
  // deleteContact,
  // submitContacts,
  changeFilter,
} from './phonebook-actions';
// import {
// addContactRequest,
// addContactSuccess,
// addContactError,
// fetchContactRequest,
// fetchContactSuccess,
// fetchContactError,
// deleteContactRequest,
// deleteContactSuccess,
// deleteContactError,
// } from './phonebook-actions';
import {
  fetchContacts,
  postAddContact,
  deleteContact,
} from './phonebook-operations';
// import defaultContacts from '../json/defaultContacts.json';

export const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [postAddContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export const loadingReducer = createReducer(false, {
  [postAddContact.pending]: () => true,
  [postAddContact.fulfilled]: () => false,
  [postAddContact.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});
