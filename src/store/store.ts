import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "../reducer/authenticationSlice";
import userReducer from "../reducer/userSlice";

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        users: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
