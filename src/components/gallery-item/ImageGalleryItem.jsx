import PropTypes from 'prop-types';

import { ListItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <ListItem>
      <Image
        src={webformatURL}
        alt={tags}
        // onClick={onClick}
      />
    </ListItem>
  );
};

export default ImageGalleryItem;
