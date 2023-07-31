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
      return registerUser.data;
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
      return loginUser.data;
    } catch (error: any) {
      console.log(error);
      const { response } = error;
      const { data } = response;
      const { payload } = data;
      return thunkApi.rejectWithValue(payload.message);
    }
  }
);

export const secret = createAsyncThunk("SECRET", async (_, thunkApi) => {
  try {
    const userLogged = await axiosInstance.get("/users/me");
    return userLogged.data;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    const { errors } = data;
    return thunkApi.rejectWithValue(errors[0].msg);
  }
});

export const logOutUser = createAsyncThunk("LOGOUT", async (_, thunkApi) => {
  try {
    const logOut: RequestResponse = await axiosInstance.post("/users/logout");
    return logOut;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    const { errors } = data;
    return thunkApi.rejectWithValue(errors[0].msg);
  }
});

export const verifyUser = createAsyncThunk("VERIFY", async (data, thunkApi) => {
  try {
    const verifiedUser: RequestResponse = await axiosInstance.get(
      `/users/verify/${data}`
    );
    return verifiedUser;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    const { errors } = data;
    return thunkApi.rejectWithValue(errors[0].msg);
  }
});

export const resetError = createAsyncThunk(
  "RESET_ERROR",
  async (_, thunkApi) => {
    try {
      return null;
    } catch (error) {
      return thunkApi.rejectWithValue("Impossible to reset error.");
    }
  }
);

const initialState = {
  error: null,
  operationSuccess: false,
  userRegister: null,
  userLogged: null,
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
      state.userLogged = action.payload.payload.user;
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
      state.userLogged = action.payload.payload.user;
      state.isUserLogged = true;
    });
    builder.addCase(secret.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.isUserLogged = false;
      state.error = action.payload;
    });
    builder.addCase(logOutUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isUserLogged = false;
    });
    builder.addCase(logOutUser.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(verifyUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.loading = false;
      state.operationSuccess = true;
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(resetError.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetError.fulfilled, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(resetError.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
