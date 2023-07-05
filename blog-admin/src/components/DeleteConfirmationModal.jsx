import PropType from "prop-types";
import DeleteConfirmationForm from "./DeleteConfirmationForm";
import Modal from "./Modal";

const DeleteConfirmationModal = ({ postId, removePost, onCancel }) => {
  return (
    <Modal>
      <DeleteConfirmationForm
        postId={postId}
        removePost={removePost}
        onCancel={onCancel}
      />
    </Modal>
  );
};

DeleteConfirmationModal.propTypes = {
  postId: PropType.string.isRequired,
  removePost: PropType.func.isRequired,
  onCancel: PropType.func.isRequired,
};

export default DeleteConfirmationModal;
