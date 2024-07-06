import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    books: [],
    authors: [],
    genre: [],
    theme: [],
    category: [],
  },
  reducers: {
    latestBooks: (state) => {
      state.value += 1;
    },
    groupDetails: (state, action) => {
      state.value -= 1;
    },
    searchBooks: (state, action) => {
      state.value += action.payload;
    },
    recommendedBooks: (state) => {
      state.value += action.payload;
    },
  },
});

export const { latestBooks, groupDetails, searchBooks, recommendedBooks } =
  searchSlice.actions;

export default searchSlice.reducer;
