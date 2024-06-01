import ImageCard from "../ImageCard/ImageCard.jsx";
import css from './ImageGallery.module.css'

export default function ImageGallery({ items, openModal, closeModal, isOpen, setImageUrl }) {
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
