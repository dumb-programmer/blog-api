import { useParams } from "react-router-dom";
import fetchPost from "../../api/fetchPost";
import useApi from "../../hooks/useApi";
import Comments from "./Comments";
import formatDate from "../../utils/formatDate";

const PostDetail = () => {
  const { postId } = useParams();
  const { data, error, loading } = useApi(() => fetchPost(postId));

  return (
    <div className="centered">
      <div
        style={{
          width: "60vw",
          minWidth: "min-content",
          maxWidth: 1000,
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 5,
        }}
      >
        <h1>{data && data.title}</h1>
        <p class="post-meta">{data && formatDate(data.createdAt)}</p>
        <p style={{ marginTop: 20 }}>{data && data.body}</p>
        <div style={{ marginTop: 40 }}>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
