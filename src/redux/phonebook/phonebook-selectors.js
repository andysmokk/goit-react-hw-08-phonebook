import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts.contacts;
export const getFilter = state => state.contacts.filter;
export const isLoader = state => state.contacts.loading;
export const getNotification = state => state.contacts.contacts.isNotification;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);
