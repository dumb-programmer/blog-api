const getPosts = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts?fields=title,createdAt,isPublished`, {
        mode: "cors"
    });
};

export default getPosts;