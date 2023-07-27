import { useState, useEffect } from "react";

const useApi = (fetchData) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        fetchData().then(result => {
            if (result.status === 200) {
                result.json().then(result => {
                    if (!ignore) {
                        setData(result);
                        setLoading(false);
                    }
                });
            }
            else if (result.status === 404) {
                setLoading(false);
                setError({ status: 404, message: "Sorry couldn't find this resource" });
            }
            else if (result.status === 429) {
                setLoading(false);
                setError({ status: 429, message: "Too many requests" });
            }
            else {
                setLoading(false);
                setError({ message: "An unkown error has occurred" });
            }
        }).catch(err => {
            setLoading(false);
            setError(err);
        })

        return () => {
            ignore = true;
        }
    }, []);

    return { data, setData, loading, error };
};

export default useApi;