import { createSlice } from "@reduxjs/toolkit";

interface UserProps {
    token: string;
    isLoggedIn: boolean;
    isAdmin: boolean;
}

const userProps: UserProps = {
    token: "",
    isLoggedIn: false,
    isAdmin: false,
};

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: userProps,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token || "";
            state.isAdmin = action.payload.isAdmin || false;
        },
        loginFailure: (state) => {
            state.token = "";
            state.isLoggedIn = false;
        },
        logout: (state) => {
            state.token = "";
            state.isLoggedIn = false;
        },
    },
});


export const { loginSuccess, loginFailure, logout } = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
