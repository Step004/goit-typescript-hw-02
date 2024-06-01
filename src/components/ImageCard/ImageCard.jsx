import css from "./ImageCard.module.css";


export default function ImageCard({ image, openModal, setImageUrl }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.description}
        className={css.img}
        onClick={() => {
          setImageUrl(image.urls.regular);
          openModal();
        }}
      />
    </div>
  );
}
