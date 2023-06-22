export const deletePost = async (id: number) => {
    try {
        const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error deleting post:", error);
    }
};
