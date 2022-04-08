import { faker } from "@faker-js/faker";

import {
  createServer,
  Factory,
  Response,
  Model,
  RestSerializer,
} from "miragejs";

import { Post } from "models/post";
import { User } from "models/user";
import { UsersData } from "./db/users";

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
      this.timing = 500;

      this.get("/users");
      this.get("/users/:id");
      this.patch("/users/:id");

      this.get("/posts");
      this.get("/posts", async function (schema, request) {
        const posts = schema.all("post").models.sort((a, b) => {
          return a.created_at < b.created_at ? 1 : -1;
        });

        const postsSerialize = posts.map((post) => {
          return {
            ...post.attrs,
            authorName: schema.find("user", post.attrs.author)?.attrs.userName,
          };
        });

        return new Response(200, {}, { posts: postsSerialize });
      });

      this.get("/posts/:author", async function (schema, request) {
        const { author } = request.params;
        const posts = schema
          .all("post")
          .models.filter((post) => post.author === author || post.retweet);
        return new Response(200, {}, { posts });
      });

      this.post("/posts");
      this.patch("/posts/:id");

      // reset namespace
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
