import { initialProps } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { searchBooks } from "./asyncActions";

const initialState: initialProps = {
  book: "",
  error: null,
  loading: false,
  result: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook(state, action) {
      state.book = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.result = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const { setBook } = bookSlice.actions;
export default bookSlice.reducer;
