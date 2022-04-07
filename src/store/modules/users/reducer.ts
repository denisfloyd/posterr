import { Reducer } from "redux";
import produce from "immer";

import { ActionTypes, IUserState } from "./types";

const INITIAL_STATE: IUserState = {
  index: {
    id: "1",
    userName: "johndoe",
    createdAt: "2021-12-03T05:40:44.408Z",
    following: ["2", "3"],
    followers: ["2", "3"],
  },
};

const auth: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.setAuthUser: {
        const user = action.payload.user;

        draft.index = user;

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default auth;
