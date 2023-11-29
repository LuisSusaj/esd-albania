import { UseFetchResponseProps } from "../interfaces/useFetchInterfaces";
import axios from "axios";

const fetchData = async (props: UseFetchResponseProps) => {
  const {
    url,
    method,
    data,
    params,
    headers,
    setIsLoading,
    setResponse,
    setError,
  } = props;
  const requestData = { url, method, data, params, headers };
  setIsLoading(true);
  try {
    const request = await axios.request(requestData);
    setResponse(request.data);
  } catch (err:any) {
    setError(err);
  }
  setIsLoading(false);
};

export default fetchData;
