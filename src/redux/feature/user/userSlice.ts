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
    email: "alnoman.cs@gmail.com",
    // email: null,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      // setUser: (state, action) => {
      state.user.email = "alnoman.cs@gmail.com";
      state.isSuccess = false;
      state.isError = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
