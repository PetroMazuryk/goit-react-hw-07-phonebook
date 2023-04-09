import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slices/contactSlice';
import { filterSlice } from './slices/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
