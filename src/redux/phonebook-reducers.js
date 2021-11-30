import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  postAddContact,
  deleteContact,
} from './phonebook-operations';

const initialState = {
  contacts: [],
  isNotification: {},
};

const contactsReducer = createReducer(initialState, {
  [fetchContacts.fulfilled]: (_, action) => ({
    contacts: action.payload,
    isNotification: {},
  }),
  [postAddContact.fulfilled]: state => ({
    ...state,
    isNotification: {
      status: 'success',
      message: 'Contact added successfully!',
    },
  }),
  [deleteContact.fulfilled]: (state, action) => ({
    ...state,
    contacts: state.contacts.filter(({ id }) => id !== action.payload),
    isNotification: {
      status: 'success',
      message: 'Contact successfully deleted!',
    },
  }),
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
