import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onModalShow,
}) => {
  return (
    <ListItem>
      <Image
        src={webformatURL}
        data-modal={largeImageURL}
        alt={tags}
        onClick={onModalShow}
      />
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onModalShow: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
