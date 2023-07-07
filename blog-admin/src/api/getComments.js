const getComments = (postId) => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`, {
        mode: "cors"
    });
};

export default getComments;