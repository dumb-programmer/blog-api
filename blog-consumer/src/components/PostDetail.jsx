import { useParams } from "react-router-dom";
import fetchPost from "../api/fetchPost";
import useApi from "../hooks/useApi";
import Comments from "./Comments";
import formatDate from "../utils/formatDate";
import PostDetailSkeleton from "./PostDetailSkeleton";
import ErrorMessage from "./ErrorMessage";

const PostDetail = () => {
  const { postId } = useParams();
  const { data, error, loading } = useApi(() => fetchPost(postId));

  return (
    <div className="centered">
      <div className="post-container">
        {loading && <PostDetailSkeleton />}
        {error && <ErrorMessage error={error} />}
        {data && (
          <>
            <h1>{data.title}</h1>
            <p className="meta-data">{formatDate(data.createdAt)}</p>
            <p style={{ marginTop: 20 }}>{data.body}</p>
          </>
        )}
        {!error && (
          <div style={{ marginTop: 40 }}>
            <Comments />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
