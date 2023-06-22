export const createPost = async (postData: any) => {
    try {
        const response = await fetch(
            "https://dev.codeleap.co.uk/careers/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            }
        );

        const data = await response.json();
        console.log("New post created:", data);
    } catch (error) {
        console.error("Error creating post:", error);
    }
};
