"use client";
import { authSlice, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./api";
import { Post } from "./types";
import { PostList } from "./PostList";
import { createPost } from "./api/getPosts";
import styles from "./Posts.module.css";
import { CreatePost } from "./CreatePost";
import { Heading } from "../Heading/Heading";

export const Posts = () => {
  // TODO: talvez deixar a lógica de getPosts direto no componente filho

  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn, userName } = useSelector((state) => state.auth);

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
      <div className="flow">
        <div className={styles.header}>
          <Heading text="CodeLeap Network" />
        </div>

        {/* <div> */}
          <CreatePost />
          <PostList />
        {/* </div> */}
      </div>
    </div>
  );
};
// TODO:
/* TODOS:
[] - make site container have a maximum size clamped
*/
