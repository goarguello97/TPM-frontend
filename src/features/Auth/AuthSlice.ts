import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import {
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

const initialState = {
  error: null,
  operationSuccess: false,
  userRegister: null,
  Userlogged: null,
  isUserLogged: false,
  loading: false,
};

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
      state.userRegister = action.payload.message;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
    //   state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
