import fetchPosts from "../../api/fetchPosts";
import useApi from "../../hooks/useApi";
import Post from "./Post";

const Posts = () => {
  const { loading, data, error } = useApi(() => fetchPosts());

  return (
    <div className="posts">
      {data && data.map((post, idx) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
