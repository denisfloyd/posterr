/* eslint-disable no-shadow */

import { User } from "models/user";

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  setAuthUser = "SET_AUTH_USER",
}

export interface IUserState {
  index: User;
}
