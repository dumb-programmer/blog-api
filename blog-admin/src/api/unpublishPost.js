const unpublishPost = (postId, token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/unpublish`, {
        method: "PUT", mode: "cors", headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
};

export default unpublishPost;