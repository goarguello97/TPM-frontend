import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/AuthSlice";
import userSlice from "../features/User/UserSlice";
import roleSlice from "../features/Role/RoleSlice";
import MatchSlice from "../features/Match/MatchSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    role: roleSlice,
    match: MatchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
