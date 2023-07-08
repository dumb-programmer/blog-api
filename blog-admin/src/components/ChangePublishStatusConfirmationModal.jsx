import PropType from "prop-types";
import Modal from "./Modal";
import ChangePublishStateConfirmationForm from "./ChangePublishStatusConfirmationForm";

const ChangePublishConfirmationModal = ({
  postId,
  isPublished,
  updatePostPublishStatus,
  onCancel,
}) => {
  return (
    <Modal>
      <ChangePublishStateConfirmationForm
        postId={postId}
        isPublished={isPublished}
        updatePostPublishStatus={updatePostPublishStatus}
        onCancel={onCancel}
      />
    </Modal>
  );
};

ChangePublishConfirmationModal.propTypes = {
  postId: PropType.string.isRequired,
  isPublished: PropType.bool.isRequired,
  updatePostPublishStatus: PropType.func.isRequired,
  onCancel: PropType.func.isRequired,
};

export default ChangePublishConfirmationModal;
