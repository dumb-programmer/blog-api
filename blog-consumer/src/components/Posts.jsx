import fetchPosts from "../../api/fetchPosts";
import useApi from "../../hooks/useApi";
import Post from "./Post";

const Posts = () => {
  const { loading, data, error } = useApi(() => fetchPosts());

  return (
    <div className="centered">
      <div className="posts">
        {data && data.map((post, idx) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Posts;
