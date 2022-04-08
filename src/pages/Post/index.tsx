import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "components/elements/Button";
import { Modal } from "components/elements/Modal";

import { Container, TextArea, TextaAreaRemain } from "./styles";
import { queryClient } from "services/queryClient";
import { Post as PostType } from "models/post";
import { api } from "services/api";
import { useSelector } from "react-redux";
import { IState } from "store";
import { User } from "models/user";

const Post: React.FC = () => {
  const user = useSelector<IState, User>((state) => state.users.index);

  const navigate = useNavigate();

  const [textPost, setTextPost] = useState("");
  const [postRetweet, setPostRetweet] = useState<PostType | null>(null);

  const [searchParams] = useSearchParams();

  const handleSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();

      if (postRetweet) {
        await api.patch(`/posts/${postRetweet.id}`, {
          post: {
            ...postRetweet,
            retweet: {
              text: textPost ?? "",
            },
          },
        });
      } else {
        const post: PostType = {
          author: user.id,
          createdAt: new Date().toISOString(),
          text: textPost ?? "",
          id: "",
        };

        await api.post("/posts", {
          post,
        });
      }

      queryClient.invalidateQueries("posts");
      navigate("/");
    },
    [postRetweet, navigate, textPost, user]
  );

  useEffect(() => {
    const post = searchParams.get("post");

    if (post) {
      try {
        const queryData = queryClient.getQueryData("posts") as any;

        const posts = queryData.posts as PostType[];
        const postRetweet = posts.find((p) => p.id === post);

        if (postRetweet) {
          setPostRetweet(postRetweet);
          return;
        }
      } catch (error) {
        return navigate("/");
      }
    }
  }, [navigate, searchParams]);

  return (
    <Modal
      returnToMain
      rootElement={document.getElementById("modal_root") as HTMLElement}
    >
      <Container>
        <h3 className="title">
          {postRetweet ? "Retweet Post" : `New Post(err)`}
        </h3>

        <form onSubmit={handleSubmitForm}>
          <TextArea
            value={textPost}
            onChange={(e) => setTextPost(e.target.value)}
            maxLength={777}
          ></TextArea>
          <TextaAreaRemain>
            Characters Remaining {textPost.length}/777
          </TextaAreaRemain>

          {postRetweet && (
            <>
              <h4>Original Post: </h4>
              <span>{postRetweet.text}</span>
            </>
          )}

          <Button type="submit">Post</Button>
        </form>
      </Container>
    </Modal>
  );
};

export default Post;
