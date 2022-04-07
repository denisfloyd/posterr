import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Post } from "models/post";
import { User } from "models/user";

import { Modal } from "components/elements/Modal";

import { IState } from "store";
import { IUserState } from "store/modules/users/types";

import { api } from "services/api";

import AvatarImg from "assets/avatar.png";

import { Container, Content, Feed, Network, FeedHeader } from "./styles";
import { Button } from "components/elements/Button";
import { setAuthUser } from "store/modules/users/actions";
import { Loader } from "components/elements/Loader";

export const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const { index: user } = useSelector<IState, IUserState>(
    (state) => state.users
  );

  const [users, setUsers] = useState<User[]>([]);
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const joinedAtFormattedDate = useMemo(() => {
    return new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(user.createdAt));
  }, [user]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/users");
      setUsers(
        response.data.users.filter(
          (userFilter: User) => user.id !== userFilter.id
        )
      );

      const responsePosts = await api.get(`/posts/${user.id}`);
      setMyPosts(responsePosts.data.posts);

      setIsLoading(false);
    };

    getData();
  }, [user.id]);

  async function handleUpdateUser(userId: string) {
    const newFollowings = new Set([...user.following]);

    if (newFollowings.has(userId)) {
      newFollowings.delete(userId);
    } else {
      newFollowings.add(userId);
    }

    dispatch(setAuthUser({ ...user, following: [...newFollowings] }));

    const response = await api.patch(`/users/${user.id}`, {
      user: {
        ...user,
        following: [...newFollowings],
      },
    });

    if (response.status !== 200) {
      dispatch(setAuthUser({ ...user }));
    }
  }

  return (
    <Modal>
      <Container>
        <Content>
          <img src={AvatarImg} alt="avatar" />
          <span>@{user.userName}</span>
          <span>Joined at {joinedAtFormattedDate}</span>

          <div>
            <span>Following: {user.following.length}</span>
            <span>Followers: {user.followers.length}</span>
          </div>
        </Content>

        <div>
          <h4>People that you may know..</h4>
          <Network>
            {users &&
              users.map((userFromDb) => (
                <li key={userFromDb.userName}>
                  <span>{userFromDb.userName}</span>

                  {user.following.includes(userFromDb.id) ? (
                    <AiFillHeart
                      size={16}
                      color={"red"}
                      onClick={() => handleUpdateUser(userFromDb.id)}
                    />
                  ) : (
                    <AiOutlineHeart
                      size={16}
                      onClick={() => handleUpdateUser(userFromDb.id)}
                    />
                  )}
                </li>
              ))}
          </Network>
        </div>

        {isLoading && <Loader isActive size="sm" />}
      </Container>

      <FeedHeader>
        <h2>Feed</h2>
        <div>
          <span>Posts: {myPosts.length}</span>
          <Button>New Posterr</Button>
        </div>
      </FeedHeader>

      <Feed>
        {myPosts &&
          myPosts.map((post) => (
            <li key={post.id}>
              {post.retweet ? (
                <span>You retweet:</span>
              ) : (
                <span>You write a post:</span>
              )}
              {post.retweet?.text ? (
                <p>{post.retweet.text}</p>
              ) : (
                <p>{post.text}</p>
              )}
            </li>
          ))}
      </Feed>
    </Modal>
  );
};
