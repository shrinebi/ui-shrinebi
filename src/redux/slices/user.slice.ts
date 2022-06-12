import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IUserState {
  data: object | null;
}

const initialState: IUserState = {
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const isLoggedInSelector = createSelector(
  (state: RootState) => state.user,
  (state: IUserState) => !!state.data
);

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
