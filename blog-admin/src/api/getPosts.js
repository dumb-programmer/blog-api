const getPosts = (token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts?fields=title,createdAt,isPublished`, {
        mode: "cors", headers: { "Authorization": `Bearer ${token}` }
    });
};

export default getPosts;