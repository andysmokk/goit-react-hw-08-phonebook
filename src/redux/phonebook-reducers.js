import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  postAddContact,
  deleteContact,
} from './phonebook-operations';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [postAddContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
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

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
