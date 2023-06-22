/* Instruments */
import {
    authSlice,
    counterSlice,
    shouldGetPostsSlice,
} from "./slices";

export const reducer = {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    shouldGetPosts: shouldGetPostsSlice.reducer,
};
