import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}

interface ImageGalleryProps {
  items: Image[];
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
  setImageUrl: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> =({ items, openModal, closeModal, isOpen, setImageUrl }) => {
  return (
    <ul className={css.list}>
      {items.map((image) => (
        <li key={image.id} className={css.listItem}>
          <div>
            <ImageCard
              image={image}
              openModal={openModal}
              closeModal={closeModal}
              isOpen={isOpen}
              setImageUrl={setImageUrl}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;