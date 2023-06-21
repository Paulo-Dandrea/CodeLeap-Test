"use client";
import { authSlice, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./api";
import { Post } from "./types";
import { PostList } from "./PostList";
import { createPost } from "./api/getPosts";

const CreatePost = () => {
  const handleButtonClick = () => {
    createPost({
      username: "XXXX",
      created_datetime: new Date(),
      title: "XXXX",
      content: "XXXX",
    });
  };

  return (
    <>
      <h2>What's on your mind?</h2>
      <form>
        <label>
          Title
          <input type="text" placeholder="Hello world" />
        </label>

        <textarea placeholder="Content"></textarea>

        <button type="button" onClick={handleButtonClick}>
          Create
        </button>
      </form>
    </>
  );
};

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
    <>
      <h1 className="posts">POSTS from {userName}</h1>
      <CreatePost />

       <PostList  />}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
