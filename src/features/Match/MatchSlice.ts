import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { MatchState, RequestResponse } from "../../interfaces/match.interfaces";

export const matchRequest = createAsyncThunk(
  "MATCH_REQ",
  async (data, thunkApi) => {
    try {
      const matchRequest: RequestResponse = await axiosInstance.post(
        "/match/",
        data
      );
      return matchRequest;
    } catch (error: any) {
      const { response } = error;
      const { data } = response;
      const { errors } = data;
      return thunkApi.rejectWithValue(errors[0].msg);
    }
  }
);

export const matchResponse = createAsyncThunk(
  "MATCH_RES",
  async (data, thunkApi) => {
    try {
      const matchResponse: RequestResponse = await axiosInstance.post(
        "/match/response/",
        data
      );
      return matchResponse;
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
  loading: false,
  operationSuccess: false,
} as MatchState;

export const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(matchRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(matchRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.operationSuccess = true;
    });
    builder.addCase(matchRequest.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(matchResponse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(matchResponse.fulfilled, (state, action) => {
      state.loading = false;
      state.operationSuccess = true;
    });
    builder.addCase(matchResponse.rejected, (state, action) => {
      state.loading = false;
      state.operationSuccess = false;
      state.error = action.payload;
    });
  },
});

export default matchSlice.reducer;
