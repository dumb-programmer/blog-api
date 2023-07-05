const updatePost = (postId, data, token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
        method: "PUT", mode: "cors", headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }, body: JSON.stringify(data)
    });
};

export default updatePost;