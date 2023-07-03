import getRelativeTime from "../../utils/getRelativeTime";

const Comment = ({ comment }) => {
  return (
    <div className="comment" style={{ marginBottom: 15 }}>
      <h4>{comment.name}</h4>
      <span className="meta-data">{getRelativeTime(comment.createdAt)}</span>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
