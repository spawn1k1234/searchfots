import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { fetchImages } from "./api";
import "./styles.css";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [mode, setMode] = useState("photo");

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetchImages(query, page, 12, mode)
      .then((newImages) => {
        setImages((prev) => (page === 1 ? newImages : [...prev, ...newImages]));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [query, page, mode]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => setPage((prev) => prev + 1);

  const openModal = (largeURL) => {
    setModalImg(largeURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImg(null);
  };

  return (
    <div className="App">
      <AnimatedBackground />
      <Searchbar onSubmit={handleSearch} mode={mode} setMode={setMode} />
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={loadMore} />}
      {showModal && <Modal src={modalImg} onClose={closeModal} />}
    </div>
  );
}

export default App;
