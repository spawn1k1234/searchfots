import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          small={webformatURL}
          large={largeImageURL}
          onClick={onImageClick}
        />
      ))}
    </ul>
  );
}
