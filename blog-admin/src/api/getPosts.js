const getPosts = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/posts?fields=title`, {
        mode: "cors"
    });
};

export default getPosts;