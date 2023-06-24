import { CODELEAP_URL } from "@/lib/constants";

interface CreatePostBody {
    username: string;
    created_datetime: Date;
    title: string;
    content: string;
}

export const createPost = async (body: CreatePostBody) => {
    try {
        const response = await fetch(CODELEAP_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.error("Error creating post:", error);
    }
};
