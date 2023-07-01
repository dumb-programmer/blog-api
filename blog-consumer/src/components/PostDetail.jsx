import { useParams } from "react-router-dom";
import fetchPost from "../../api/fetchPost";
import useApi from "../../hooks/useApi";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const PostDetail = () => {
  const { postId } = useParams();
  const { data, error, loading } = useApi(() => fetchPost(postId));

  return (
    <div className="centered">
      <div style={{ maxWidth: 500 }}>
        <h1>{data && data.title}</h1>
        <p style={{ marginTop: 50 }}>{data && data.body}</p>
        <div style={{ marginTop: 40 }}>
          <CommentForm />
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
