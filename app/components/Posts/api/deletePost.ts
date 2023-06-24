import { CODELEAP_URL } from "@/lib/constants";

export const deletePost = async (id: number) => {
    try {
        await fetch(`${CODELEAP_URL}${id}/`, {
            method: "DELETE",
        });
    } catch (error) {
        console.error("Error deleting post:", error);
    }
};
