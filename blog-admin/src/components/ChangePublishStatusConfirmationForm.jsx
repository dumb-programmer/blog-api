import PropType from "prop-types";
import { useState } from "react";
import Loader from "./Loader";
import publishPost from "../api/publishPost";
import useAuthContext from "../hooks/useAuthContext";
import unpublishPost from "../api/unpublishPost";

const ChangePublishStatusConfirmationForm = ({
  postId,
  isPublished,
  updatePostPublishStatus,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false);
  const { token } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isPublished) {
        await unpublishPost(postId, token);
      } else {
        await publishPost(postId, token);
      }
      updatePostPublishStatus(postId, !isPublished);
      onCancel();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: 10,
        maxWidth: 400,
      }}
      onSubmit={loading ? null : handleSubmit}
    >
      <h2>{isPublished ? "Unpublish" : "Publish"} Post</h2>
      <p>
        Are you sure you want to {isPublished ? "unpublish" : "publish"} this
        post?
      </p>
      <div className="btns-container flex-end" style={{ gap: "0.6rem" }}>
        <button className="btn secondary-btn" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn primary-btn">
          {loading ? (
            <Loader size={24} color="#fff" />
          ) : isPublished ? (
            "Unpublish"
          ) : (
            "Publish"
          )}
        </button>
      </div>
    </form>
  );
};

ChangePublishStatusConfirmationForm.propTypes = {
  postId: PropType.string.isRequired,
  isPublished: PropType.bool.isRequired,
  updatePostPublishStatus: PropType.func.isRequired,
  onCancel: PropType.func.isRequired,
};

export default ChangePublishStatusConfirmationForm;
