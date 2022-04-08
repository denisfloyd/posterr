import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";

import AvatarImg from "assets/avatar.png";

import { Checkbox } from "components/elements/Checkbox";
import { LoadingState } from "components/widgets/LoadingState";

import usePosts from "services/hooks/usePosts";

import { Post } from "models/post";
import { User } from "models/user";

import { IState } from "store";

import { Header } from "./Header";
import { PostCard } from "./PostCard";

import { Container, Content, CheckContainer, Posts, Profile } from "./styles";

export const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const user = useSelector<IState, User>((state) => state.users.index);

  const [posts, setPosts] = useState<Post[]>([]);

  const [searchParams] = useSearchParams();

  const { data, isLoading, isFetching } = usePosts();

  useEffect(() => {
    if (data?.posts) {
      setPosts(data.posts);
    }
  }, [data]);

  useEffect(() => {
    if (searchParams.get("user") && data) {
      const userName = searchParams.get("user");
      setPosts(
        data.posts.filter(
          (post) => post.authorName === userName || post.retweet
        )
      );
    } else if (data) {
      setPosts(data.posts);
    }
  }, [searchParams, data]);

  function handleGetMyPosts() {
    navigate(!!searchParams.get("user") ? "/" : `?user=${user.userName}`);
  }

  return (
    <Container>
      <Header />

      <Content>
        <Profile>
          <Link to={`/profile?${searchParams}`}>
            <img src={AvatarImg} alt="avatar" />
          </Link>
          <span>
            <b>@{user.userName}</b>
          </span>
          <span>Followeed by {user.followers.length}</span>
        </Profile>

        {(isLoading || isFetching) && <LoadingState />}

        <Posts>
          <CheckContainer>
            <span>My Posts</span>
            <Checkbox
              onClick={() => handleGetMyPosts()}
              defaultChecked={!!searchParams.get("user")}
            />
          </CheckContainer>

          <ul>
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </ul>
        </Posts>
      </Content>

      <Suspense fallback={<span>Loading...</span>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
