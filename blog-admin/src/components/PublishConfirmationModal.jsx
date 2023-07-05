import PropType from "prop-types";
import Modal from "./Modal";
import PublishConfirmationForm from "./PublishConfirmationForm";

const PublishConfirmationModal = ({ postId, onCancel }) => {
  return (
    <Modal>
      <PublishConfirmationForm postId={postId} onCancel={onCancel} />
    </Modal>
  );
};

PublishConfirmationModal.propTypes = {
  postId: PropType.string.isRequired,
  onCancel: PropType.func.isRequired,
};

export default PublishConfirmationModal;
