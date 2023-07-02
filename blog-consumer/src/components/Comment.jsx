import getRelativeTime from "../../utils/getRelativeTime";

const Comment = ({ comment }) => {
  return (
    <div className="comment" style={{ marginBottom: 15 }}>
      <h4>
        {comment.name} . {getRelativeTime(comment.createdAt)}
      </h4>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
