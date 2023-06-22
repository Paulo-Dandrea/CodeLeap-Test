interface CreatePostBody {
    username: string;
    created_datetime: Date;
    title: string;
    content: string;
}

export const createPost = async (body: CreatePostBody) => {
    try {
        const response = await fetch(
            "https://dev.codeleap.co.uk/careers/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();
        console.log("New post created:", data);
    } catch (error) {
        console.error("Error creating post:", error);
    }
};
