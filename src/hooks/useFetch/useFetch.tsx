import { useEffect, useState, useRef } from "react";
import { UseFetchRequestProps } from "../../interfaces/useFetchInterfaces";
import fetchData from "../../utils/fetchData";

const useFetch = (props: UseFetchRequestProps) => {
  const { url, method, data, params, headers } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<null | object>({});
  const [error, setError] = useState(null);
  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      fetchData({
        url,
        method,
        data,
        params,
        headers,
        isLoading,
        setIsLoading,
        setError,
        setResponse
      });
      hasMounted.current = true;
    }
  }, [url, method]);
  return {
    response,
    isLoading,
    error,
  }
};

export default useFetch;
