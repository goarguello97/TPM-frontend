import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { UserState } from "../../interfaces/user.interfaces";

const initialState = {
  error: null,
  operationSuccess: false,
  user: null,
  users: null,
  loading: false,
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
