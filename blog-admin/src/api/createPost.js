const createPost = (data, token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/`, {
        method: "POST", mode: "cors", headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
};

export default createPost;