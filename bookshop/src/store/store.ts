import { configureStore } from "@reduxjs/toolkit";
import userTestReducer from "./slices/userTestSlice";
import bookReducer from "./slices/bookSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
    userTest: userTestReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
