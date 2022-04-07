import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineMessage,
} from "react-icons/ai";

import { Actions, Container } from "./styles";

interface IPost {
  text?: string;
  author: string;
  authorName: string;
  retweet?: {
    text?: string;
  };
}

interface PostProps {
  post: IPost;
}

export const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <Container>
      <h3>{post.authorName}</h3>
      <span>{post.text}</span>

      <Actions>
        <AiOutlineRetweet size={20} />
        <AiOutlineHeart size={20} />
        <AiOutlineMessage size={20} />
      </Actions>
    </Container>
  );
};
