const fetchPost = (postId) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, { mode: "cors" });
};

export default fetchPost;