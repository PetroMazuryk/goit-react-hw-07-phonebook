// import { createSlice } from '@reduxjs/toolkit';
// import { initialContacts } from 'data/initialContacts';
// import { nanoid } from 'nanoid';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialContacts.items,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });
// // console.log(contactsSlice);
// export const { addContact, deleteContact } = contactsSlice.actions;
//
import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/operations/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});
