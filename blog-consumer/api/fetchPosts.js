const fetchPosts = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts`, { mode: "cors" });
};

export default fetchPosts;