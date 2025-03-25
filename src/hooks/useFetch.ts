import { useState, useEffect } from "react";
import httpRequest from "~/lib/httpClient";

/**
 * useFetch 请求数据
 * method: Post
 */
export default (url: string, body = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        httpRequest.post(url, body).then(res => {
            setLoading(false)
            setData(res)
        })
        .catch(err => {
            setLoading(false);
            const error = {
                code: -1,
                message: err
            }
            setError(error)
        })
    }, [])

    return {
        data,
        loading,
        error
    }
}