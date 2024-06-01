import Modal from "react-modal";
import css from './ImageModale.module.css'

export default function ImageModal({ isOpen, imageUrl, onClose }) {
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
}
