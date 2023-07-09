const getPost = (postId, token) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}?fields=title,body,isPublished`, {
        mode: "cors", headers: { "Authorization": `Bearer ${token}` }
    });
};

export default getPost;