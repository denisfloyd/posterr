import { renderHook } from "@testing-library/react-hooks";
import AxiosMock from "axios-mock-adapter";

import { queryClient } from "../queryClient";

import { api } from "services/api";
import usePosts from "./usePosts";
import { QueryClientProvider } from "react-query";

const apiMock = new AxiosMock(api);

const posts = [
  {
    author: "1",
    authorName: "johndoe",
    created_at: "2022-04-08T14:15:12.850Z",
    id: "48",
    text: "text post 1",
  },
  {
    author: "2",
    authorName: "janedoe",
    created_at: "2022-04-02T14:15:12.850Z",
    id: "49",
    text: "text post 2",
  },
  {
    author: "1",
    authorName: "johndoe",
    created_at: "2022-04-01T14:15:12.850Z",
    id: "50",
    text: "text post 3",
  },
  {
    author: "3",
    authorName: "jimdoe",
    created_at: "2022-04-01T14:15:12.850Z",
    id: "51",
    text: "text post 4",
    retweet: {
      text: "retweet text 1",
    },
  },
];

export const wrapper: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("UsePosts react-query hook util", () => {
  beforeAll(() => {
    apiMock.onGet("posts").reply(200, posts);
  });

  it("it should get posts data", async () => {
    const { result, waitFor } = renderHook(() => usePosts(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

    await waitFor(() => {
      expect(result.current.data).toEqual(posts);
    });

    queryClient.refetchQueries("posts");
    await waitFor(() => expect(result.current.isRefetching).toBeTruthy());
  });

  it("it should return null when we had error status response", async () => {
    apiMock.onGet("posts").reply(401);

    const { result, waitFor } = renderHook(() => usePosts(), { wrapper });

    queryClient.refetchQueries("posts");
    await waitFor(() => result.current.isRefetching);
    await waitFor(() => !result.current.isRefetching);

    expect(result.current.data).toBeNull();
  });
});
