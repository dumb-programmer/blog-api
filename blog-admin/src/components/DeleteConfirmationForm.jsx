import "../styles/Form.css";

const DeleteConfirmationForm = ({ onCancel }) => {
  return (
    <form
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
        <button className="btn secondary-btn" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn danger-btn">
          Delete
        </button>
      </div>
    </form>
  );
};

export default DeleteConfirmationForm;
