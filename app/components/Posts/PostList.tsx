import { useEffect, useState } from "react";
import { getPosts } from "./api";
import { Post } from "./types";
import { shouldGetPostsSlice, useDispatch, useSelector } from "@/lib/redux";
import { PostItem } from "./PostItem";

export const PostList = () => {
    const dispatch = useDispatch();

    const { userName } = useSelector((state) => state.auth);
    const { shouldGetPosts } = useSelector((state) => state.shouldGetPosts);

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts().then((posts) => setPosts(posts));
        dispatch(shouldGetPostsSlice.actions.doNotUpdate());
    }, [shouldGetPosts]);

    return (
        <>
            {!posts.length ? (
                // TODO: Loading component
                <div className="flex justify-content-center">
                    <p>Loading...</p>
                </div>
            ) : (
                posts.map((item) => {
                    const editable = userName.toUpperCase() === item.username.toUpperCase();
                    return <PostItem key={item.id} item={item} editable={editable} />;
                })
            )}
        </>
    );
};
