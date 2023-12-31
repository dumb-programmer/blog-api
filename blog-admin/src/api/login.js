const login = (data) => {
    return fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST", mode: "cors", body: JSON.stringify(data), headers: {
            "Content-Type": "application/json"
        }
    });
};

export default login;