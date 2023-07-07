import PropType from "prop-types";
import DeleteConfirmationForm from "./DeleteConfirmationForm";
import Modal from "./Modal";

const DeleteConfirmationModal = ({
  title,
  message,
  contentId,
  removeContent,
  onSubmit,
  onCancel,
}) => {
  return (
    <Modal>
      <DeleteConfirmationForm
        title={title}
        message={message}
        contentId={contentId}
        removeContent={removeContent}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </Modal>
  );
};

DeleteConfirmationModal.propTypes = {
  title: PropType.string.isRequired,
  message: PropType.string.isRequired,
  contentId: PropType.string.isRequired,
  removeContent: PropType.func.isRequired,
  onSubmit: PropType.func.isRequired,
  onCancel: PropType.func.isRequired,
};

export default DeleteConfirmationModal;
