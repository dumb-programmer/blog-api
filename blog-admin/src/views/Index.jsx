import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import getPosts from "../api/getPosts";
import CreatePostButton from "../components/CreatePostButton";
import Post from "../components/Post";
import useApi from "../hooks/useApi";
import "../styles/Index.css";
import useAuthContext from "../hooks/useAuthContext";
import PostSkeleton from "../components/PostSkeleton";

const Index = () => {
  const { token } = useAuthContext();
  const { data, setData, loading, error } = useApi(() => getPosts(token));

  return (
    <div className="centered">
      <div className="posts">
        {loading &&
          Array.from({ length: 5 }).map((_, idx) => <PostSkeleton key={idx} />)}
        {data &&
          data.map((post) => (
            <Post
              key={post._id}
              post={post}
              updatePostPublishStatus={(postId, status) => {
                setData((data) => {
                  for (const post of data) {
                    if (post._id === postId) {
                      post.isPublished = status;
                    }
                  }
                  return [...data];
                });
              }}
              removePost={(postId) =>
                setData((data) => data.filter((post) => post._id !== postId))
              }
            />
          ))}
      </div>
      <CreatePostButton />
    </div>
  );
};

export default Index;
