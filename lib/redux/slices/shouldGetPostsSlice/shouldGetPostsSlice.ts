import { createSlice } from "@reduxjs/toolkit";

const shouldGetPostsState = {
    shouldGetPosts: false,
};

export const shouldGetPostsSlice = createSlice({
    name: "shouldGetPosts",
    initialState: shouldGetPostsState,
    reducers: {
        update: (state) => {
            state.shouldGetPosts = true;
        },

        doNotUpdate: (state) => {
            state.shouldGetPosts = false;
        },
    },
});
