import fetchPosts from "../api/fetchPosts";
import useApi from "../hooks/useApi";
import ErrorMessage from "./ErrorMessage";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";

const Posts = () => {
  const { loading, data, error } = useApi(() => fetchPosts());

  return (
    <div className="centered">
      <div className="posts">
        {error && (
          <div className="centered">
            <ErrorMessage error={error} />
          </div>
        )}
        {loading &&
          Array.from({ length: 10 }).map((_, idx) => (
            <PostSkeleton key={idx} />
          ))}
        {data && data.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Posts;
