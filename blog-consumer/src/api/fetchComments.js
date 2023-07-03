const fetchComments = (postId) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`);
};

export default fetchComments;