import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: User = {
  isSignIn: false,
  email: undefined,
  name: undefined,
  password: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isSignIn = true;
      state.email = action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    unsetUser: (state) => {
      state.isSignIn = false;
      state.email = undefined;
    },
  },
});
export default userSlice.reducer;

export const { unsetUser, setPassword, setUserName, setUser } =
  userSlice.actions;
