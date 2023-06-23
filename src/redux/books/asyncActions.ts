import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchBooks = createAsyncThunk(
  "search/searchBooks",
  async (book: string) => {
    const apiKey = "AIzaSyDIyhnwg8J4mHpVHhIULQG4s-mor_xw8ak";

    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`
    );

    return response.data.items;
  }
);
