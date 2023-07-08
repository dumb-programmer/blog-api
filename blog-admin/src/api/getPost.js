const getPost = (postId) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}?fields=title,body,isPublished`, {
        mode: "cors"
    });
};

export default getPost;