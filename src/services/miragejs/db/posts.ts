export type Post = {
  id: string;
  text?: string;
  createdAt: string;
  author: string;
  retweet?: {
    text?: string;
  };
};
