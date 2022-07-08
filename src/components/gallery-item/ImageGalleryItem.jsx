import PropTypes from 'prop-types';

import { ListItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <ListItem className="image-gallery-item">
      <Image
        className="image-gallery-image"
        src={image.webformatURL}
        alt={image.tags}
        onClick={onClick}
      />
    </ListItem>
  );
};

export default ImageGalleryItem;
