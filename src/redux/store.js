import {configureStore} from '@reduxjs/toolkit';
import {
	persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {filtersReducer} from './filterSlice';
import {contactsReducer} from './contactsSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const persistContactsReducer = persistReducer(
  persistConfig, 
  contactsReducer,
);


export const store = configureStore({
	reducer: {
		contacts: persistContactsReducer,
		filter: filtersReducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)