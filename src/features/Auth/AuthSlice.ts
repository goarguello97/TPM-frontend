import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import {
  AuthLogin,
  AuthRegister,
  AuthState,
  RequestResponse,
} from "../../interfaces/auth.interfaces";

export const registerUser = createAsyncThunk(
  "REGISTER",
  async (data: AuthRegister, thunkApi) => {
    try {
      const registerUser: RequestResponse = await axiosInstance.post(
        "/users/register",
        data
      );
      return registerUser;
    } catch (error: any) {
      const { response } = error;
      const { data } = response;
      const { errors } = data;
      return thunkApi.rejectWithValue(errors[0].msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "LOGIN",
  async (data: AuthLogin, thunkApi) => {
    try {
      const loginUser: RequestResponse = await axiosInstance.post(
        "/users/login",
        data
      );
      return loginUser;
    } catch (error: any) {
      const { response } = error;
      const { data } = response;
      const { errors } = data;
      return thunkApi.rejectWithValue(errors[0].msg);
    }
  }
);

export const secret = createAsyncThunk("SECRET", async (_, thunkApi) => {
  try {
    const userLogged = await axiosInstance.get("/users/me");
    return userLogged;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    const { errors } = data;
    return thunkApi.rejectWithValue(errors[0].msg);
  }
});

const initialState = {
  error: null,
  operationSuccess: false,
  userRegister: null,
  Userlogged: null,
  isUserLogged: false,
  loading: false,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.operationSuccess = true;
      state.userRegister = action.payload.payload.message;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.operationSuccess = true;
      state.Userlogged = action.payload.payload.user;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(secret.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(secret.fulfilled, (state, action) => {
      state.loading = false;
      state.isUserLogged = true;
    });
    builder.addCase(secret.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;