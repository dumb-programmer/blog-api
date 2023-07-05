const deletePost = (postId, token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
        method: "DELETE", mode: "cors", headers: {
            "Authorization": `Bearer ${token}`
        }
    });
};

export default deletePost;