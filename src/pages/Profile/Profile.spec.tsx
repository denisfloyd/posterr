import { useNavigate } from "react-router-dom";
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

import { api } from "services/api";

import Profile from ".";

const Root = document.createElement("div");
Root.setAttribute("id", "modal_root");

describe("Profile Modal Page", () => {
  beforeEach(() => {
    mocked(useNavigate).mockReturnValue(() => {
      jest.fn();
    });
  });

  beforeAll(() => {
    apiMock.onGet("users").reply(200, {
      users: [
        {
          id: "2",
          userName: "janedoe",
          createdAt: "2020-01-01T00:00:00.000Z",
          following: ["1", "3"],
          followers: ["1", "3"],
        },
        {
          id: "3",
          userName: "jimdoe",
          createdAt: "2020-01-01T00:00:00.000Z",
          following: ["1", "2"],
          followers: ["1", "2"],
        },
        {
          id: "4",
          userName: "jimmydoe",
          createdAt: "2020-01-01T00:00:00.000Z",
          following: ["3"],
          followers: [],
        },
      ],
    });

    apiMock.onGet(`posts/1`).reply(200, {
      posts: [
        {
          author: "1",
          authorName: "johndoe",
          created_at: "2022-04-08T14:15:12.850Z",
          id: "48",
          text: "text post 1",
        },
        {
          author: "1",
          authorName: "johndoe",
          created_at: "2022-04-02T14:15:12.850Z",
          id: "49",
          text: "text post 2",
        },
        {
          author: "1",
          authorName: "johndoe",
          created_at: "2022-04-01T14:15:12.850Z",
          id: "450",
          text: "text post 3",
        },
      ],
    });

    apiMock.onPatch().reply(200);
  });

  it("it should render correctly", async () => {
    await act(async () => {
      renderWithStore(<Profile />, {
        container: document.body.appendChild(Root),
      });
    });

    expect(screen.getByText("@johndoe")).toBeInTheDocument();
    expect(screen.getByText("Joined at December 03, 2021")).toBeInTheDocument();
    expect(screen.getByText("People that you may know..")).toBeInTheDocument();
  });

  it("it should render correctly following users", async () => {
    await act(async () => {
      renderWithStore(<Profile />, {
        container: document.body.appendChild(Root),
      });
    });

    await waitFor(() => {
      expect(screen.getByText("jimdoe")).toBeInTheDocument();
      expect(screen.getByText("jimmydoe")).toBeInTheDocument();

      const heartsFilled = screen.getAllByTestId("icon-heart-filled");
      expect(heartsFilled).toHaveLength(2);

      const heartsOutline = screen.getAllByTestId("icon-heart-outline");
      expect(heartsOutline).toHaveLength(1);
    });
  });

  it("it should be able to follow a user", async () => {
    await act(async () => {
      renderWithStore(<Profile />, {
        container: document.body.appendChild(Root),
      });
    });

    await screen.findByText("jimdoe");

    const heartOutline = screen.getByTestId("icon-heart-outline");

    act(() => {
      fireEvent.click(heartOutline);
    });

    await waitFor(() => {
      const heartsFilled = screen.getAllByTestId("icon-heart-filled");
      expect(heartsFilled).toHaveLength(3);
    });
  });

  it("it should be able to unfollow a user", async () => {
    await act(async () => {
      renderWithStore(<Profile />, {
        container: document.body.appendChild(Root),
      });
    });

    await screen.findByText("jimdoe");
    const heartsFilled = screen.getAllByTestId("icon-heart-filled");

    act(() => {
      fireEvent.click(heartsFilled[heartsFilled.length - 1]);
    });

    await waitFor(() => {
      const heartsFilled = screen.getAllByTestId("icon-heart-filled");
      expect(heartsFilled).toHaveLength(2);
    });
  });
});
