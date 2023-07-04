import { useNavigate } from "react-router-dom";
import EyeIcon from "./icons/EyeIcon";
import PenIcon from "./icons/PenIcon";
import TrashIcon from "./icons/TrashIcon";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import PublishConfirmationModal from "./PublishConfirmationModal";
import { useState } from "react";

const Post = () => {
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [showPublishConfirmationModal, setShowPublishConfirmationModal] =
    useState(false);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/posts/faksjdflasjfd/edit`);
  };

  const handleDelete = () => {
    setShowDeleteConfirmationModal(true);
  };

  const handlePublish = () => {
    setShowPublishConfirmationModal(true);
  };

  return (
    <>
      <div className="post">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          aliquam debitis beatae quos! Distinctio exercitationem adipisci illo
        </h2>
        <div className="flex-end" style={{ gap: "0.6rem" }}>
          <button
            className="icon-btn"
            aria-label="edit post"
            onClick={handleEdit}
          >
            <PenIcon size={20} color="grey" />
          </button>
          <button
            className="icon-btn"
            aria-label="delete post"
            onClick={handleDelete}
          >
            <TrashIcon size={20} color="#f70000" />
          </button>
          <button
            className="icon-btn"
            aria-label="publish post"
            onClick={handlePublish}
          >
            <EyeIcon size={20} color="grey" />
          </button>
        </div>
      </div>
      {showDeleteConfirmationModal && (
        <DeleteConfirmationModal
          onCancel={() => setShowDeleteConfirmationModal(false)}
        />
      )}
      {showPublishConfirmationModal && (
        <PublishConfirmationModal
          onCancel={() => setShowPublishConfirmationModal(false)}
        />
      )}
    </>
  );
};

export default Post;
