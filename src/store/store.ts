import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../reducer/applicationSlice";
import { authenticationReducer } from "../reducer/authenticationSlice";
import degreeCourseReducer from "../reducer/degreeCourseSlice";
import userReducer from "../reducer/userSlice";

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        users: userReducer,
        degreeCourse: degreeCourseReducer,
        applications: applicationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
