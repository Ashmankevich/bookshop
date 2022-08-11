import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import bookReducer from "./slices/bookSlice";
import cartReducer from "./slices/cartSlice";
import favReducer from "./slices/favSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
    cart: cartReducer,
    fav: favReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
