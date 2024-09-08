
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      return { ...state, loading: true, error: false };
    },
    signinSuccess: (state, action) => {
      return { ...state, loading: false, error: false, currentUser: action.payload };
    },
    signinFailure: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    },
    updateUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
    refreshUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
    signoutUser:()=>{
      return {state: undefined}
    }
  },
});

export const { signinFailure, signinStart, signinSuccess, updateUser, signoutUser } =
  userSlice.actions;
export default userSlice.reducer;