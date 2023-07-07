import { useState } from "react";
import PropType from "prop-types";
import TrashIcon from "./icons/TrashIcon";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import deleteComment from "../api/deleteComment";

const Comment = ({ comment, removeComment }) => {
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  return (
    <>
      <div className="comment">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{comment.name}</h3>
          <button
            className="icon-btn"
            onClick={() => setShowDeleteConfirmationModal(true)}
          >
            <TrashIcon size={18} color="red" />
          </button>
        </div>
        <p className="meta-data">{comment.createdAt}</p>
        <p>{comment.body}</p>
      </div>
      {showDeleteConfirmationModal && (
        <DeleteConfirmationModal
          title="Delete Comment"
          message="Are you sure you want to delete this comment? This action is non-recoverable"
          contentId={comment._id}
          removeContent={removeComment}
          onSubmit={(commentId, token) =>
            deleteComment(comment.postId, commentId, token)
          }
          onCancel={() => setShowDeleteConfirmationModal(false)}
        />
      )}
    </>
  );
};

Comment.propTypes = {
  comment: PropType.object.isRequired,
  removeComment: PropType.func.isRequired,
};

export default Comment;
