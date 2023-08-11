import { useEffect, useState } from "react";

const useApi = (fetchData) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
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
                }).catch(err => {
                    setError(err);
                    setLoading(false);
                });
            }
            else if (response.status === 404) {
                setError({ status: 404, message: "Resource not found" });
                setLoading(false);
            }
            else if (response.status === 429) {
                setError({ status: 429, message: "Too many requests" });
                setLoading(false);
            }
            else {
                setError({ status: 500, message: "An unkown error has occurred" });
                setLoading(false);
            }
        })

        return () => {
            ignore = true;
        }
    }, []);

    return { data, setData, loading, error };
};

export default useApi;
