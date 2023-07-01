import { useState, useEffect } from "react";

const useApi = (fetchData) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData().then(result => {
            result.json().then(result => {
                setData(result);
            });
        }).catch(err => {
            setError(err);
        }).finally(() => setLoading(false));
    }, []);

    return { data, setData, loading, error };
};

export default useApi;