import Modal from "react-modal";
import css from "./ImageModale.module.css";

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
      className={css.content}
    >
      <img src={imageUrl} alt="Modal Image" className={css.image} />
    </Modal>
  );
};

export default ImageModal;
