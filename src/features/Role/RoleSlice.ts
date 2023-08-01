import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { RequestResponse, RoleState } from "../../interfaces/role.interfaces";

export const getRoles = createAsyncThunk("GET_ROLES", async (_, thunkApi) => {
  try {
    const roles: RequestResponse = await axiosInstance.get("/roles/");
    return roles.data;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    const { errors } = data;
    return thunkApi.rejectWithValue(errors[0].msg);
  }
});

const initialState = {
  error: null,
  roles: null,
  loading: null,
  operationSuccess: false,
} as RoleState;

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoles.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRoles.fulfilled, (state, action) => {
      state.loading = false;
      state.roles = action.payload.payload.roles;
      state.operationSuccess = true;
    });
    builder.addCase(getRoles.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
  },
});

export default roleSlice.reducer;
