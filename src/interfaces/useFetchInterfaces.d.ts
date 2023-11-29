import { Dispatch, SetStateAction } from "react";

export interface UseFetchRequestProps {
  url: string;
  method: "get" | "post" | "patch" | "post" | "delete" | "put";
  params?: object;
  data?: object;
  headers?: object;
}
export interface UseFetchResponseProps extends UseFetchRequestProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setResponse: Dispatch<SetStateAction<any>>;
  setError: Dispatch<SetStateAction<any>>;
}