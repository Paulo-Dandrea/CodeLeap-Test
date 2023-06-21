import { Post } from "../types";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://dev.codeleap.co.uk/careers/", {
    // TODO: create file for URL and etc
    method: "GET",
    // headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result.results;
};

export const createPost = async (postData)  => {
  try {
    const response = await fetch("https://dev.codeleap.co.uk/careers/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();
    console.log('New post created:', data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
};
