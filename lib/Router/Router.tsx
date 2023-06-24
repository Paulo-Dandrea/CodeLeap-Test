"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";

interface RouterProps {
    children: React.ReactNode;
}

export const Router = ({ children }: RouterProps) => {
    const router = useRouter();
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/posts");
        }

        if (!isLoggedIn) {
            router.push("/");
        }

    }, [isLoggedIn]);

    return <>{children}</>;
};
