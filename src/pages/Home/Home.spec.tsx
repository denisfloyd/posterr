import { useNavigate, useSearchParams } from "react-router-dom";
import { waitFor, renderWithStore, screen, act } from "tests/test-utils";
import AxiosMock from "axios-mock-adapter";
import { mocked } from "jest-mock";

const apiMock = new AxiosMock(api);

jest.mock("react-router-dom");

import { api } from "services/api";

import { Homepage } from ".";

describe("Homepage", () => {
  beforeAll(() => {
    apiMock.onGet("posts").reply(200, {
      posts: [
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
      ],
    });
  });

  beforeEach(() => {
    mocked(useNavigate).mockReturnValue(() => {
      jest.fn();
    });

    mocked(useSearchParams).mockReturnValue([
      {
        get: jest.fn(),
      },
    ] as any);
  });

  it("it should render correctly", async () => {
    await act(async () => {
      renderWithStore(<Homepage />);
    });

    expect(screen.getByText("@johndoe")).toBeInTheDocument();
    expect(screen.getByText("text post 2")).toBeInTheDocument();
  });

  it("it should be able to see only my posts", async () => {
    mocked(useSearchParams).mockReturnValue([
      {
        get: () => {
          return "johndoe";
        },
      },
    ] as any);

    await act(async () => {
      renderWithStore(<Homepage />);
    });

    const checkBox = screen.getByRole("checkbox");

    await waitFor(() => {
      // expect(screen.queryByText("")).not.toBeInTheDocument();
      expect(screen.queryByText("text post 2")).toBeNull();
    });
  });
});
