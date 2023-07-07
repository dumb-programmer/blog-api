import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import useApi from "../hooks/useApi";
import getComments from "../api/getComments";
import EmptyComments from "../components/EmptyComments";

const Comments = () => {
  const { postId } = useParams();
  const { data, setData, loading, error } = useApi(() => getComments(postId));
  return (
    <div className="centered">
      <div className="content">
        <h2>Comments</h2>
        {data &&
          data.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              removeComment={(commentId) =>
                setData((comment) =>
                  comment.filter((comment) => comment._id !== commentId)
                )
              }
            />
          ))}
        {data?.length === 0 && <EmptyComments />}
      </div>
    </div>
  );
};

export default Comments;
