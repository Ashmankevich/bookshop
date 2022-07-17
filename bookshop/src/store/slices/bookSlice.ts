import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookApi } from "../../api/bookApi";
import { NewBooksApi } from "../../api/types";
import { BookApi } from "../types";

const initialState: BookApi = {
  books: [],
  error: null,
  status: "idle",
  total: "0",
  result: {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  },
};

export const fetchBook = createAsyncThunk<NewBooksApi>(
  "book/fetchBook",
  async () => {
    const newBooks = await bookApi.getNewBooks();
    return newBooks;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBook.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.books = payload.books;
      state.error = payload.error;
      state.total = payload.total;
    });
    builder.addCase(fetchBook.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});
export default bookSlice.reducer;
