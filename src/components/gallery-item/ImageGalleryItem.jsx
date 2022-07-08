const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="image-gallery-item">
      <img
        className="image-gallery-image"
        src={image.webformatURL}
        alt={image.tags}
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
