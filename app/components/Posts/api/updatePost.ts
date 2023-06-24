import { CODELEAP_URL } from "@/lib/constants";

interface updatePostBody {
    title: string;
    content: string;
}

export const updatePost = async (id: number, body: updatePostBody) => {
    try {
        await fetch(`${CODELEAP_URL}${id}/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.error("Error updating post:", error);
    }
};
