import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "id-1", name: "Nur Pektaş", number: "501 094 81 38" },
    { id: "id-2", name: "Abdullah Pektaş", number: "535 818 93 73" },
    { id: "id-3", name: "Fatma Pektaş", number: "500 017 61 38" },
  ],
  searchValue: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateSearchValue } =
  contactsSlice.actions;
export default contactsSlice.reducer;
