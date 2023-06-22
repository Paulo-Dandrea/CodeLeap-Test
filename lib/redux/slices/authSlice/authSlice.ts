/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const authState = {
    isLoggedIn: false,
    userName: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = true;
            state.userName = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userName = "";
        },
    },
});
