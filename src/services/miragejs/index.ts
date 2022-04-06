import { faker } from "@faker-js/faker";

import { createServer, Factory, Model, RestSerializer } from "miragejs";

import { Post } from "./db/posts";
import { User, UsersData } from "./db/users";

export function makeServer() {
  const server = createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
      post: Model.extend<Partial<Post>>({}),
    },

    factories: {
      post: Factory.extend({
        text() {
          return faker.lorem.words(100);
        },
        author() {
          return String(faker.datatype.number({ min: 1, max: 4 }));
        },
        created_at() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.db.loadData({
        users: UsersData,
      });

      server.createList("post", 50);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.get("/users/:id");

      this.get("/posts");
      this.patch("/posts/:id");

      // reset namespace
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
