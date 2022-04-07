export type Post = {
  id: string;
  text?: string;
  createdAt: string;
  author: string;
  authorName: string;
  retweet?: {
    text?: string;
  };
};
