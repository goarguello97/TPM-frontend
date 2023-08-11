import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { UserState } from "../../interfaces/user.interfaces";
import { RequestResponse } from "../../interfaces/auth.interfaces";

export const getUser = createAsyncThunk("GET_USER", async (data:string, thunkApi) => {
  try {
    const user: RequestResponse = await axiosInstance.get(
      `/users/user?id=${data}`
    );
    return user.data;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    const { errors } = data;
    return thunkApi.rejectWithValue(errors[0].msg);
  }
});

export const getUsers = createAsyncThunk("GET_USERS", async (_, thunkApi) => {
  try {
    const users: RequestResponse = await axiosInstance.get(`/users/`);
    return users.data;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    const { errors } = data;
    return thunkApi.rejectWithValue(errors[0].msg);
  }
});

export const updateUser = createAsyncThunk(
  "UPDATE_USER",
  async (data, thunkApi) => {
    try {
      const updatedUser: RequestResponse = await axiosInstance.put(
        "/users/update",
        data
      );
      return updatedUser.data;
    } catch (error: any) {
      const { response } = error;
      const { data } = response;
      const { errors } = data;
      return thunkApi.rejectWithValue(errors[0].msg);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  async (data, thunkApi) => {
    try {
      const deletedUser: RequestResponse = await axiosInstance.delete(
        "/users/delete",
        { data }
      );
      return deletedUser;
    } catch (error: any) {
      const { response } = error;
      const { data } = response;
      const { errors } = data;
      return thunkApi.rejectWithValue(errors[0].msg);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  "CHANGE_AVATAR",
  async (formData: any, thunkApi) => {
    try {
      const uploadedPhoto = await axiosInstance.patch(
        "/users/add-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return uploadedPhoto.data;
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
  user: null,
  users: null,
  loading: false,
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.payload.user;
      state.operationSuccess = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.payload.users;
      state.operationSuccess = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.payload.user;
      state.operationSuccess = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.operationSuccess = true;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(changeAvatar.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(changeAvatar.fulfilled, (state, action) => {
      state.loading = false;
      state.operationSuccess = true;
    });
    builder.addCase(changeAvatar.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
