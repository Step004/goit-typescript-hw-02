import css from "./ImageCard.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}
interface ImageCardProps {
  image: Image;
  openModal: () => void;
  setImageUrl: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal, setImageUrl }) =>{
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