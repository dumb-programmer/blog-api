import DeleteConfirmationForm from "./DeleteConfirmationForm";
import Modal from "./Modal";

const DeleteConfirmationModal = ({ onCancel }) => {
  return (
    <Modal>
      <DeleteConfirmationForm onCancel={onCancel} />
    </Modal>
  );
};

export default DeleteConfirmationModal;
