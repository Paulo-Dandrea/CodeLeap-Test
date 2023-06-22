/* Instruments */
import {
    authSlice,
    shouldGetPostsSlice,
} from "./slices";

export const reducer = {
    auth: authSlice.reducer,
    shouldGetPosts: shouldGetPostsSlice.reducer,
};
