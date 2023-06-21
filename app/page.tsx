/* Components */
import { useSelector } from "@/lib/redux";
import { Posts } from "./components/Posts/Posts";
import { Counter } from "./components/Counter/Counter";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// TODO: Depois /casa vem para cá como <CASA />

export default function IndexPage() {


  return (
    <>
      {/* <Counter /> */}
      <Posts />
    </>
  );
}

export const metadata = {
  title: "CodeLeap",
};
