import { useState } from "react";
import PropType from "prop-types";
import useAuthContext from "../hooks/useAuthContext";
import "../styles/Form.css";

const DeleteConfirmationForm = ({
  title,
  message,
  contentId,
  removeContent,
  onSubmit,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false);
  const { token } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await onSubmit(contentId, token);
      if (response.status === 200) {
        onCancel();
        removeContent(contentId);
      }
    } catch (error) {
      console.error("There was an error");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={loading ? null : handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: 10,
        maxWidth: 400,
      }}
    >
      <h2>{title}</h2>
      <p>{message}</p>
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
  title: PropType.string.isRequired,
  message: PropType.string.isRequired,
  contentId: PropType.string.isRequired,
  removeContent: PropType.func.isRequired,
  onSubmit: PropType.func.isRequired,
  onCancel: PropType.func.isRequired,
};

export default DeleteConfirmationForm;
