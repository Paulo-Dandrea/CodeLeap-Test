'use client';
import { useSelector } from "@/lib/redux";
import Login from "../components/Login/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();
  console.log("isLoggedIn: ", isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <h1>Login page</h1>
      <Login />
    </>
  );
}
