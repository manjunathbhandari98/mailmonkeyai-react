import { createSlice } from "@reduxjs/toolkit";

export type User = {
  id?: string;
  fullName?: string;
  email?: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;   // 👈 NEW
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,      // 👈 start loading on initial app load
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
