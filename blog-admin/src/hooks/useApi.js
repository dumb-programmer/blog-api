import { useEffect, useState } from "react";

const useApi = (fetchData) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        fetchData().then(response => {
            if (response.status === 200) {
                response.json().then(jsonResponse => {
                    if (!ignore) {
                        setData(jsonResponse);
                        setLoading(false);
                    }
                }).catch(err => setError(err));
            }
        })

        return () => {
            ignore = true;
        }
    }, []);

    return { data, loading, error };
};

export default useApi;