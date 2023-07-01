const Comment = ({ comment }) => {
  return (
    <div className="comment" style={{ marginBottom: 15 }}>
      <h4>{comment.name} . 2 days ago</h4>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
