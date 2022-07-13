import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../gallery-item';

const ImageGallery = ({ data, onModalShow}) => {
  return (
    <Gallery>
      {data.map(item => (
        <ImageGalleryItem key={item.id} {...item} onModalShow={onModalShow} />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onModalShow: PropTypes.func.isRequired,
};

export default ImageGallery;
