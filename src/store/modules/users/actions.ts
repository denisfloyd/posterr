import { User } from "models/user";
import { ActionTypes } from "./types";

export function setAuthUser(user: User) {
  return {
    type: ActionTypes.setAuthUser,
    payload: {
      user,
    },
  };
}
