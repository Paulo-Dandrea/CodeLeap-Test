import { CODELEAP_URL } from "@/lib/constants";

export const deletePost = async (id: number) => {
    try {
        const response = await fetch(`${CODELEAP_URL}${id}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error deleting post:", error);
    }
};
