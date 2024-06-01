import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallary/ImageGallery";
import { fetchCards } from "../../galary-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setTotalPages(0);

  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getPhotos() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchCards(query, page);
        setPhotos((prevArticles) => {
          return [...prevArticles, ...data.results];
        });
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>

      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          imageUrl={imageUrl}
          onClose={closeModal}
        />
      )}

      {error && <ErrorMessage />}

      {photos.length > 0 && (
        <ImageGallery
          items={photos}
          isOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          setImageUrl={setImageUrl}
        />
      )}

      {isLoading && <Loader />}
      {photos.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </>
  );
}

export default App;
