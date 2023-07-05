import PropType from "prop-types";

const PublishConfirmationForm = ({ postId, onCancel }) => {
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
      <h2>Publish Post</h2>
      <p>Are you sure you want to publish this post?</p>
      <div className="btns-container flex-end" style={{ gap: "0.6rem" }}>
        <button className="btn secondary-btn" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn primary-btn">
          Publish
        </button>
      </div>
    </form>
  );
};

PublishConfirmationForm.propTypes = {
  postId: PropType.string.isRequired,
  onCancel: PropType.func.isRequired,
};

export default PublishConfirmationForm;
