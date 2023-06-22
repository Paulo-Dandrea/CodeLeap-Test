interface updatePostBody {
    title: string;
    content: string;
}

export const updatePost = async (
    id: number,
    body: updatePostBody
) => {
    try {
        const response = await fetch(
            `https://dev.codeleap.co.uk/careers/${id}/`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();
        console.log("data: ", data);
    } catch (error) {
        console.error("Error updating post:", error);
    }
};
