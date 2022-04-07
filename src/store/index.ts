import { createStore } from "redux";

import rootReducer from "./modules/rootReducer";
import { IUserState } from "./modules/users/types";

export interface IState {
  users: IUserState;
}

const store = createStore(rootReducer);

export default store;
