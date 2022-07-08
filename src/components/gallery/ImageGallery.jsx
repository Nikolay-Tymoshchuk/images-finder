import PropTypes from 'prop-types';

import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../gallery-item';

const ImageGallery = async ({ query, isLoading }) => {
  const list = await getImages(query);
  return (
    <Gallery>
      {/* {list.map(item => (
        <ImageGalleryItem key={item.id} {...item} />
      ))} */}
    </Gallery>
  );
};
export default ImageGallery;
