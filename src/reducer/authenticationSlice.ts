import { createSlice } from "@reduxjs/toolkit";

interface UserProps {
    token: string;
    isLoggedIn: boolean;
}

const userProps: UserProps = {
    token: "",
    isLoggedIn: false,
};

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: userProps,
    reducers: {
        loginSuccess: (state, action) => {
            if (action.payload.token) state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        loginFailure: state => {
            state.token = "";
            state.isLoggedIn = false;
        },
        logout: state => {
            state.token = "";
            state.isLoggedIn = false;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
