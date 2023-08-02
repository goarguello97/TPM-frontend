import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/Auth/AuthSlice";
import UserSlice from "../features/User/UserSlice";
import RoleSlice from "../features/Role/RoleSlice";
import MatchSlice from "../features/Match/MatchSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    role: RoleSlice,
    match: MatchSlice,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
