import { useQuery, UseQueryResult } from "react-query";
import { api } from "services/api";
import { Post } from "models/post";

interface Response {
  posts: Post[];
}

const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export default function usePosts(): UseQueryResult<Response, unknown> {
  return useQuery("posts", () => getPosts(), {
    refetchInterval: 1000 * 60 * 1, // 1 minute
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchIntervalInBackground: false,
  });
}
