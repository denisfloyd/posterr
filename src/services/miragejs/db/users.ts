import { faker } from "@faker-js/faker";

import { User } from "models/user";

export const UsersData: User[] = [
  {
    user_name: "johndoe",
    createdAt: faker.date.past().toISOString(),
    following: ["2", "3"],
    followers: ["2", "3"],
  },
  {
    user_name: "janedoe",
    createdAt: faker.date.past().toISOString(),
    following: ["1", "3"],
    followers: ["1", "3"],
  },
  {
    user_name: "jimdoe",
    createdAt: faker.date.past().toISOString(),
    following: ["1", "2"],
    followers: ["1", "2"],
  },
  {
    user_name: "jimmydoe",
    createdAt: faker.date.past().toISOString(),
    following: ["3"],
    followers: [],
  },
];
