"use client";
// import { authSlice } from "@/lib/redux";
// import { useDispatch } from "react-redux";

import { PostList } from "./PostList";
import { CreatePost } from "./CreatePost";
import { Heading } from "../Heading/Heading";

import styles from "./Posts.module.css";

export const Posts = () => {
    // TODO: future feature?

    // const dispatch = useDispatch();

    // const handleLogout = () => {
    //     dispatch(authSlice.actions.logout());
    // };

    return (
        <div className={styles.container}>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div className="pb-1">
                <div className={styles.header}>
                    <Heading text="CodeLeap Network" accent />
                </div>

                <CreatePost />
                <PostList />
            </div>
        </div>
    );
};


