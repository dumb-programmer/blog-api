import Post from "./Post";

const Posts = () => {
  return (
    <div className="posts">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Post key={idx} />
      ))}
    </div>
  );
};

export default Posts;
