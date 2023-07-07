const deleteComment = (postId, commentId, token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments/${commentId}`, {
        method: "DELETE", mode: "cors", headers: {
            "Authorization": `Bearer ${token}`
        }
    });
};

export default deleteComment;