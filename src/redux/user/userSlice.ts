import { createSlice } from "@reduxjs/toolkit";

interface InitialUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | undefined | null;
}

const initialState: InitialUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
      state.isSuccess = false;
      state.isError = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
