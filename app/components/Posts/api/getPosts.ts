import { CODELEAP_URL } from "@/lib/constants";

import { Post } from "../types";

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch(CODELEAP_URL, {
        method: "GET",
    });
    const result = await response.json();

    return result.results;
};
