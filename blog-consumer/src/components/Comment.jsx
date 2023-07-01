const Comment = ({ comment }) => {
  return (
    <div class="comment" style={{ marginBottom: 15 }}>
      <h4>{comment.name} . 2 days ago</h4>
      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
