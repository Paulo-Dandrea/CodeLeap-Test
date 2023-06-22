"use client";
import { authSlice, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PostList } from "./PostList";
import { CreatePost } from "./CreatePost";
import { Heading } from "../Heading/Heading";
import styles from "./Posts.module.css";

export const Posts = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [isLoggedIn]);

    const handleLogout = () => {
        dispatch(authSlice.actions.logout());
    };

    return (
        <div className={styles.container}>
            <button onClick={handleLogout}>Logout</button>
            <div>
                <div className={styles.header}>
                    <Heading text="CodeLeap Network" accent />
                </div>

                <CreatePost />
                <PostList />
            </div>
        </div>
    );
};


