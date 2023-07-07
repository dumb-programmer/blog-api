import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropType from "prop-types";
import EyeIcon from "./icons/EyeIcon";
import PenIcon from "./icons/PenIcon";
import TrashIcon from "./icons/TrashIcon";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import PublishConfirmationModal from "./PublishConfirmationModal";
import CommentIcon from "./icons/CommentIcon";
import deletePost from "../api/deletePost";

const Post = ({ post, removePost }) => {
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [showPublishConfirmationModal, setShowPublishConfirmationModal] =
    useState(false);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/posts/${post._id}/edit`);
  };

  const handleDelete = () => {
    setShowDeleteConfirmationModal(true);
  };

  const handlePublish = () => {
    setShowPublishConfirmationModal(true);
  };

  const handleComments = () => {
    navigate(`/posts/${post._id}/comments`);
  };

  return (
    <>
      <div className="post">
        <h2>{post.title}</h2>
        <p className="meta-data">
          {new Intl.DateTimeFormat("en-pk").format(new Date(post.createdAt))}
        </p>
        <div className="flex-end post-action-btns">
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
          <button
            className="icon-btn"
            aria-label="publish post"
            onClick={handleComments}
          >
            <CommentIcon size={20} color="grey" />
          </button>
        </div>
      </div>
      {showDeleteConfirmationModal && (
        <DeleteConfirmationModal
          title="Delete Post"
          message="Are you sure you want to delete this post? This action is non-recoverable"
          contentId={post._id}
          removeContent={removePost}
          onSubmit={deletePost}
          onCancel={() => setShowDeleteConfirmationModal(false)}
        />
      )}
      {showPublishConfirmationModal && (
        <PublishConfirmationModal
          postId={post._id}
          onCancel={() => setShowPublishConfirmationModal(false)}
        />
      )}
    </>
  );
};

Post.propTypes = {
  post: PropType.object.isRequired,
  removePost: PropType.func.isRequired,
};

export default Post;
