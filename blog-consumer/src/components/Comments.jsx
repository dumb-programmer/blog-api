import Comment from "./Comment";
import fetchComments from "../../api/fetchComments";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

const Comments = () => {
  const { postId } = useParams();
  const { data, setData, error, loading } = useApi(() => fetchComments(postId));

  return (
    <div style={{ marginTop: 50 }}>
      <div style={{ marginTop: 20 }}>
        <CommentForm
          addComment={(comment) =>
            setData((comments) => [...comments, comment])
          }
        />
      </div>
      <div style={{ marginTop: 10 }}>
        {data &&
          data.map((comment, idx) => <Comment key={idx} comment={comment} />)}
      </div>
    </div>
  );
};

export default Comments;
