import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../modal';

import { ListItem, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleModal = () => {
    console.log('cloc :>> ');
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <ListItem onClick={this.handleModal}>
          <Image src={webformatURL} alt={tags} />
        </ListItem>
        {showModal && (
          <Modal onClose={this.handleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
export default ImageGalleryItem;

// ({ webformatURL, largeImageURL, tags })
