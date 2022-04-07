import { faker } from "@faker-js/faker";

import { User } from "models/user";

export const UsersData: User[] = [
  {
    id: "1",
    userName: "johndoe",
    createdAt: "2021-12-03T05:40:44.408Z",
    following: ["2", "3"],
    followers: ["2", "3"],
  },
  {
    id: "2",
    userName: "janedoe",
    createdAt: faker.date.past().toISOString(),
    following: ["1", "3"],
    followers: ["1", "3"],
  },
  {
    id: "3",
    userName: "jimdoe",
    createdAt: faker.date.past().toISOString(),
    following: ["1", "2"],
    followers: ["1", "2"],
  },
  {
    id: "4",
    userName: "jimmydoe",
    createdAt: faker.date.past().toISOString(),
    following: ["3"],
    followers: [],
  },
];
