import fetcher from 'helpers/fetcher';
import useSWR from 'swr';

function useGetProjects(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
}

export default useGetProjects;
