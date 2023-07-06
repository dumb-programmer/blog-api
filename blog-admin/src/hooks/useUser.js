import { useState } from "react"

const useUser = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    return { user, setUser, token, setToken };
}

export default useUser;