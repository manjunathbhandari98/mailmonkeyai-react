import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../types";


type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;   
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,      
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
