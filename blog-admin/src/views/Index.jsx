import Post from "../components/Post";
import "../styles/Index.css";

const Index = () => {
  return (
    <div className="posts">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Post key={idx} />
      ))}
    </div>
  );
};

export default Index;
