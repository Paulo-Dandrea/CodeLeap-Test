export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const minutesAgo = Math.floor((now.getTime() - date.getTime()) / 60000); // Calculate the difference in minutes
  if (minutesAgo < 1) {
    return "just now";
  } else if (minutesAgo === 1) {
    return "1 minute ago";
  } else {
    return `${minutesAgo} minutes ago`;
  }
};

//   TODO: Create a test
