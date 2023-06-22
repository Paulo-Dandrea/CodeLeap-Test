'use client';
import { useSelector } from "@/lib/redux";
import Login from "../components/Login/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Login />
    </>
  );
}
