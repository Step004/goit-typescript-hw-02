import css from "./ImageCard.module.css";
import { Image } from "../App/App.types";

interface ImageCardProps {
  image: Image;
  openModal: () => void;
  setImageUrl: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  openModal,
  setImageUrl,
}) => {
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
};
export default ImageCard;
