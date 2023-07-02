import { useState, useEffect } from "react";

const useApi = (fetchData) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        fetchData().then(result => {
            result.json().then(result => {
                if (!ignore) {
                    setData(result);
                    setLoading(false);
                }
            });
        }).catch(err => {
            setError(err);
        })

        return () => {
            ignore = true;
        }
    }, []);

    return { data, setData, loading, error };
};

export default useApi;