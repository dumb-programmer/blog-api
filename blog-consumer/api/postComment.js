const postComment = (postId, data) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`, { method: "POST", body: JSON.stringify(data), mode: "cors", headers: { "Content-Type": "application/json" } });
};

export default postComment;