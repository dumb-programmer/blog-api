import getPosts from "../api/getPosts";
import Post from "../components/Post";
import useApi from "../hooks/useApi";
import "../styles/Index.css";

const Index = () => {
  const { data, loading, error } = useApi(() => getPosts());
  return (
    <div className="posts">
      {data && data.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Index;
