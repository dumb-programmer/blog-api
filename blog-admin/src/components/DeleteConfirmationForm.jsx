import { useState } from "react";
import PropType from "prop-types";
import deletePost from "../api/deletePost";
import useAuthContext from "../hooks/useAuthContext";
import "../styles/Form.css";

const DeleteConfirmationForm = ({ postId, removePost, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const { token } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await deletePost(postId, token);
      if (response.status === 200) {
        onCancel();
        removePost(postId);
      }
    } catch (error) {
      console.error("There was an error");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: 10,
        maxWidth: 400,
      }}
    >
      <h2>Delete Post</h2>
      <p>
        Are you sure you want to delete this post? This action is
        non-recoverable
      </p>
      <div className="btns-container flex-end" style={{ gap: "0.6rem" }}>
        <button
          className="btn secondary-btn"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </button>
        <button type="submit" className="btn danger-btn" disabled={loading}>
          Delete
        </button>
      </div>
    </form>
  );
};

DeleteConfirmationForm.propTypes = {
  postId: PropType.string.isRequired,
  removePost: PropType.func.isRequired,
  onCancel: PropType.func.isRequired,
};

export default DeleteConfirmationForm;
