"use client";
import { authSlice, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Posts = () => {
  const { isLoggedIn, userName } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

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
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
