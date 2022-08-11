import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, Fav } from "../types";

const initialState: Fav = {
  fav: [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state, { payload }: PayloadAction<Book>) => {
      state.fav = [
        { ...payload },
        ...state.fav.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeFav: (state, { payload }: PayloadAction<Book>) => {
      state.fav = state.fav.filter((item) => item.isbn13 !== payload.isbn13);
    },
  },
});
export default favSlice.reducer;

export const { addFav, removeFav } = favSlice.actions;
