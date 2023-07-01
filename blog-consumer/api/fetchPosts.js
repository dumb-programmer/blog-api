const fetchPosts = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/api/posts`, { mode: "cors" });
};

export default fetchPosts;