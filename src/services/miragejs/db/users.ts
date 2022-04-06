import { faker } from "@faker-js/faker";

export type User = {
  user_name: string;
  createdAt: string;
  following: string[];
};

export const UsersData: User[] = [
  {
    user_name: "johndoe",
    createdAt: faker.date.past().toISOString(),
    following: ["2", "3"],
  },
  {
    user_name: "janedoe",
    createdAt: faker.date.past().toISOString(),
    following: ["1", "3"],
  },
  {
    user_name: "jimdoe",
    createdAt: faker.date.past().toISOString(),
    following: ["1", "2"],
  },
  {
    user_name: "jimmydoe",
    createdAt: faker.date.past().toISOString(),
    following: ["3"],
  },
];
