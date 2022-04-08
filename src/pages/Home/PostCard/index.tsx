import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineMessage,
} from "react-icons/ai";

import { Post } from "models/post";
import { User } from "models/user";

import { IState } from "store";

import {
  Actions,
  Container,
  RetweetPostAlert,
  RetweetPostContainer,
} from "./styles";

interface PostProps {
  post: Post;
}

export const PostCard: React.FC<PostProps> = ({ post }) => {
  const user = useSelector<IState, User>((state) => state.users.index);

  return (
    <Container>
      {post.retweet && (
        <RetweetPostAlert>
          <AiOutlineRetweet size={20} />
          <h4>You retweet</h4>
        </RetweetPostAlert>
      )}

      <h3>{post.authorName}</h3>

      {post.retweet?.text ? (
        <RetweetPostContainer>
          <span>{post.retweet.text}</span>
          <p>{post.text}</p>
        </RetweetPostContainer>
      ) : (
        <span>{post.text}</span>
      )}

      <Actions>
        {!post.retweet && post.author !== user.id && (
          <Link to={`/post?post=${post.id}`}>
            <AiOutlineRetweet className="cursor" size={20} />
          </Link>
        )}
        <AiOutlineHeart size={20} />
        <AiOutlineMessage size={20} />
      </Actions>
    </Container>
  );
};
