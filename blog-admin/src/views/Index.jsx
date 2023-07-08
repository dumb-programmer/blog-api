import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import getPosts from "../api/getPosts";
import CreatePostButton from "../components/CreatePostButton";
import Post from "../components/Post";
import useApi from "../hooks/useApi";
import "../styles/Index.css";

const Index = () => {
  const { data, setData, loading, error } = useApi(() => getPosts());
  console.log(data);
  return (
    <div className="centered">
      <div className="posts">
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
