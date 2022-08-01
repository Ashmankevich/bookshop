import { RootState } from "./store";

export const getBooks = (state: RootState) => state.books;
export const getStatus = (state: RootState) => state.books.status;
export const getBooksError = (state: RootState) => state.books.error;
export const getCartInfo = (state: RootState) => state.cart;
