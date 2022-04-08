import { useNavigate, useSearchParams } from "react-router-dom";
import {
  fireEvent,
  waitFor,
  renderWithStore,
  screen,
  act,
} from "tests/test-utils";

import AxiosMock from "axios-mock-adapter";
import { mocked } from "jest-mock";
const apiMock = new AxiosMock(api);

jest.mock("react-router-dom");

import { queryClient } from "services/queryClient";
import { api } from "services/api";

import Post from ".";

const Root = document.createElement("div");
Root.setAttribute("id", "modal_root");

describe("Post Modal Page", () => {
  beforeEach(() => {
    mocked(useSearchParams).mockReturnValue([
      {
        get: jest.fn(),
      },
    ] as any);
  });

  beforeAll(() => {
    apiMock.onPatch().reply(200);
    apiMock.onPost().reply(200);

    queryClient.setQueryData("posts", {
      posts: [
        {
          created_at: "2022-04-07T23:53:33.131Z",
          author: "1",
          text: "test post 1",
          id: "1",
          authorName: "johndoe",
        },
        {
          created_at: "2022-04-07T23:53:33.131Z",
          author: "2",
          text: "test post 2",
          id: "2",
          authorName: "janedoe",
        },
      ],
    });
  });

  it("it should render correctly a new post view", async () => {
    await act(async () => {
      renderWithStore(<Post />, {
        container: document.body.appendChild(Root),
      });
    });

    await waitFor(() => {
      expect(screen.getByText("New Post(err)")).toBeInTheDocument();
      screen.debug();
    });
  });

  it("it should render correctly a retweet post view", async () => {
    mocked(useSearchParams).mockReturnValueOnce([
      {
        get: () => {
          return "1";
        },
      },
    ] as any);

    await act(async () => {
      renderWithStore(<Post />, {
        container: document.body.appendChild(Root),
      });
    });

    await waitFor(() => {
      expect(screen.getByText("Retweet Post")).toBeInTheDocument();
      screen.debug();
    });
  });

  it("it should be able to count characters remaining correctly", async () => {
    await act(async () => {
      renderWithStore(<Post />, {
        container: document.body.appendChild(Root),
      });
    });

    const textAreaInput = screen.getByTestId("text-area");

    act(() => {
      fireEvent.input(textAreaInput, { target: { value: "new post" } });
    });

    await waitFor(() => {
      expect(
        screen.getByText("Characters Remaining 8/777")
      ).toBeInTheDocument();
    });
  });

  it("it should be able to create a new post", async () => {
    const mockedUseNavigation = jest.fn();
    mocked(useNavigate).mockReturnValue(mockedUseNavigation);

    await act(async () => {
      renderWithStore(<Post />, {
        container: document.body.appendChild(Root),
      });
    });

    const textAreaInput = screen.getByTestId("text-area");

    act(() => {
      fireEvent.input(textAreaInput, { target: { value: "new post" } });
    });

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(mockedUseNavigation).toHaveBeenCalled();
      expect(mockedUseNavigation).toHaveBeenCalledWith("/");

      expect(apiMock.history["post"]).toHaveLength(1);
    });
  });

  it("it should be able to retweet a new post", async () => {
    const mockedUseNavigation = jest.fn();
    mocked(useNavigate).mockReturnValue(mockedUseNavigation);

    mocked(useSearchParams).mockReturnValueOnce([
      {
        get: () => {
          return "1";
        },
      },
    ] as any);

    await act(async () => {
      renderWithStore(<Post />, {
        container: document.body.appendChild(Root),
      });
    });

    const textAreaInput = screen.getByTestId("text-area");

    act(() => {
      fireEvent.input(textAreaInput, { target: { value: "retweet post" } });
    });

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(mockedUseNavigation).toHaveBeenCalled();
      expect(mockedUseNavigation).toHaveBeenCalledWith("/");

      expect(apiMock.history["patch"]).toHaveLength(1);
      expect(apiMock.history["patch"][0]).toEqual(
        expect.objectContaining({
          data: '{"post":{"created_at":"2022-04-07T23:53:33.131Z","author":"1","text":"test post 1","id":"1","authorName":"johndoe","retweet":{"text":"retweet post"}}}',
        })
      );
    });
  });
});
