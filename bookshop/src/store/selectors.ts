import { RootState } from "./store";

export const getBooks = (state: RootState) => state.books;
export const getBooksStatus = (state: RootState) => state.books.status;
export const getBooksError = (state: RootState) => state.books.error;
export const getUserInfo = (state: RootState) => state.user;
export const getCartInfo = (state: RootState) => state.cart;
