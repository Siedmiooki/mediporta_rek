import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type fetchTagsQueryProps = {
  sortType: string,
  sortOrder: string,
  pageSize: string
}

const fetchTags = async ({sortType, sortOrder, pageSize}: fetchTagsQueryProps) => {
  const response = await axios.get(`https://api.stackexchange.com/2.3/tags?pagesize=${pageSize}&order=${sortOrder}&sort=${sortType}&site=stackoverflow`);
  return response.data;
};
export const useFetchTagsQuery = ({sortType, sortOrder, pageSize}: fetchTagsQueryProps) => {
  const {
    data,
    error,
    isLoading,
    refetch,
    isFetching,
  } = useQuery({queryKey: ["tags"], queryFn: () =>  fetchTags({sortType, sortOrder, pageSize})});
  return {data, isLoading, isFetching, error, refetch}
}
