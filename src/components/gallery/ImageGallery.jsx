import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../gallery-item';

const ImageGallery = ({ data, ...rest }) => {
  return (
    <Gallery>
      {data.map(item => (
        <ImageGalleryItem key={item.id} {...item} {...rest} />
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
};

export default ImageGallery;
