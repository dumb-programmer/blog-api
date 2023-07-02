import fetchPosts from "../../api/fetchPosts";
import useApi from "../../hooks/useApi";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";

const Posts = () => {
  const { loading, data, error } = useApi(() => fetchPosts());
  console.log(loading);
  return (
    <div className="centered">
      <div className="posts">
        {loading &&
          Array.from({ length: 10 }).map((_, idx) => (
            <div class="post">
              <PostSkeleton key={idx} />
            </div>
          ))}
        {data && data.map((post, idx) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Posts;
