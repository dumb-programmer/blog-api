import { useParams } from "react-router-dom";
import fetchPost from "../../api/fetchPost";
import useApi from "../../hooks/useApi";
import Comments from "./Comments";
import formatDate from "../../utils/formatDate";
import PostDetailSkeleton from "./PostDetailSkeleton";

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
        {data ? (
          <>
            <h1>{data.title}</h1>
            <p class="post-meta">{formatDate(data.createdAt)}</p>
            <p style={{ marginTop: 20 }}>{data.body}</p>
          </>
        ) : (
          <PostDetailSkeleton />
        )}
        <div style={{ marginTop: 40 }}>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
