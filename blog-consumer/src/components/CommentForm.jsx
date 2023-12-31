import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import postComment from "../api/postComment";
import "../styles/CommentForm.css";

const CommentForm = ({ addComment }) => {
  const { postId } = useParams();
  const [data, setData] = useState({ name: "", body: "" });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = useCallback((e) => {
    setData({ name: "", body: "" });
    e.target.name.value = "";
    e.target.body.value = "";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name && data.body) {
      postComment(postId, data);
      addComment({ ...data, createdAt: new Date() });
      clearForm(e);
    }
  };

  const disabled = !data.name || !data.body;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Post a comment</h3>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onInput={handleInput}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="body"
          onInput={handleInput}
          required
        ></textarea>
      </div>
      <div className="flex-end">
        <button className="btn primary-btn" type="submit" disabled={disabled}>
          Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
