import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropType from "prop-types";
import EyeIcon from "./icons/EyeIcon";
import CrossEyeIcon from "./icons/CrossEyeIcon";
import PenIcon from "./icons/PenIcon";
import TrashIcon from "./icons/TrashIcon";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ChangePublishStatusConfirmationModal from "./ChangePublishStatusConfirmationModal";
import CommentIcon from "./icons/CommentIcon";
import deletePost from "../api/deletePost";

const Post = ({ post, updatePostPublishStatus, removePost }) => {
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [
    showChangePublishStatusConfirmationModal,
    setShowChangePublishStatusConfirmationModal,
  ] = useState(false);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/posts/${post._id}/edit`);
  };

  const handleDelete = () => {
    setShowDeleteConfirmationModal(true);
  };

  const handlePublish = () => {
    setShowChangePublishStatusConfirmationModal(true);
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
            aria-label={`${post.isPublished ? "unpublish" : "publish"} post`}
            onClick={handlePublish}
          >
            {post.isPublished ? (
              <CrossEyeIcon size={20} color="grey" />
            ) : (
              <EyeIcon size={20} color="grey" />
            )}
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
      {showChangePublishStatusConfirmationModal && (
        <ChangePublishStatusConfirmationModal
          postId={post._id}
          isPublished={post.isPublished}
          updatePostPublishStatus={updatePostPublishStatus}
          onCancel={() => setShowChangePublishStatusConfirmationModal(false)}
        />
      )}
    </>
  );
};

Post.propTypes = {
  post: PropType.object.isRequired,
  updatePostPublishStatus: PropType.func.isRequired,
  removePost: PropType.func.isRequired,
};

export default Post;
