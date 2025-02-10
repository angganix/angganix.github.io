import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const useRecentPost = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default useRecentPost;
