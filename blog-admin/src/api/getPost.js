const getPost = (postId) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}?fields=title,body`, {
        mode: "cors"
    });
};

export default getPost;