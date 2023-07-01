import Comment from "./Comment";
import fetchComments from "../../api/fetchComments";
import useApi from "../../hooks/useApi";

const Comments = () => {
  const { data, error, loading } = useApi(() =>
    fetchComments("649e7c02af43828ba1418ce3")
  );

  return (
    <div style={{ marginTop: 50 }}>
      {data &&
        data.map((comment, idx) => <Comment key={idx} comment={comment} />)}
    </div>
  );
};

export default Comments;
