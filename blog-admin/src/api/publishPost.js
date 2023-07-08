const publishPost = (postId, token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/publish`, {
        method: "PUT", mode: "cors", headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
};

export default publishPost;