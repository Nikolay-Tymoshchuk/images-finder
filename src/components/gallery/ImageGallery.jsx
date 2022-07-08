const ImageGallery = props => {
  const { images } = props;
  return (
    <ul className="image-gallery">
      {images.map(image => (
        <img src={image.url} alt={image.title} key={image.id} />
      ))}
    </ul>
  );
};
export default ImageGallery;
