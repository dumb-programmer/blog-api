import "../styles/CommentForm.css";

const CommentForm = () => {
  return (
    <form>
      <h3>Post a comment</h3>
      <div className="form-control">
        <label for="name">Name:</label>
        <input id="name" type="text" />
      </div>
      <div className="form-control">
        <label for="comment">Comment:</label>
        <textarea id="comment"></textarea>
      </div>
      <div className="flex-end">
        <button type="submit">Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
