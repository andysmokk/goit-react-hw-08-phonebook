import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phoneBookReducer from './phonebook-reducers';
import authReducer from './auth/auth-slice';

const phoneBookPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['token'],
};

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   loading: loadingReducer,
// });

const persistedPhoneBookReducer = persistReducer(
  phoneBookPersistConfig,
  phoneBookReducer,
);

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedPhoneBookReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// export { store };
