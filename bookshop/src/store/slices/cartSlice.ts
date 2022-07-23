import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookCartApi, Cart, GetBookDetailsApi } from "../types";

const initialState: Cart = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<BookCartApi>) => {
      state.cart = [
        { ...payload },
        ...state.cart.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeCart: (state, { payload }: PayloadAction<GetBookDetailsApi>) => {
      state.cart = state.cart.filter((item) => item.isbn13 !== payload.isbn13);
    },
    increaseAmount: (state, { payload }: PayloadAction<BookCartApi>) => {
      const cart = state.cart.find((book) => book.isbn13 === payload.isbn13);
      if (cart) {
        cart.amount = cart.amount + 1;
      }
    },
    decreaseAmount: (state, { payload }: PayloadAction<BookCartApi>) => {
      const cart = state.cart.find((book) => book.isbn13 === payload.isbn13);
      if (cart) {
        cart.amount = cart.amount - 1;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addCart, removeCart, increaseAmount, decreaseAmount } =
  cartSlice.actions;
