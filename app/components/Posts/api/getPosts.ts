import { CODELEAP_URL } from "@/lib/constants";

export const getPosts = async () => {
    try {
        const response = await fetch(CODELEAP_URL, {
            method: "GET",
        });
        const result = await response.json();

        return result.results;
    } catch (error) {
        console.error("Error getting posts:", error);
    }
};
