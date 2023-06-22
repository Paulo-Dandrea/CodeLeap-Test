import { Post } from "../types";

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://dev.codeleap.co.uk/careers/", {
        method: "GET",
    });
    const result = await response.json();

    return result.results;
};
