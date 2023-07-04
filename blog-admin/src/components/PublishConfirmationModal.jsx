import Modal from "./Modal";
import PublishConfirmationForm from "./PublishConfirmationForm";

const PublishConfirmationModal = ({ onCancel }) => {
  return (
    <Modal>
      <PublishConfirmationForm onCancel={onCancel} />
    </Modal>
  );
};

export default PublishConfirmationModal;
