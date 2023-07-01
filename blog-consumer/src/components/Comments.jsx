import Comment from "./Comment";
import fetchComments from "../../api/fetchComments";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { postId } = useParams();
  const { data, error, loading } = useApi(() => fetchComments(postId));

  return (
    <div style={{ marginTop: 50 }}>
      {data &&
        data.map((comment, idx) => <Comment key={idx} comment={comment} />)}
    </div>
  );
};

export default Comments;
