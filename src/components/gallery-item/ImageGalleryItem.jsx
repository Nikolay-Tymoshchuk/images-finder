import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Modal from '../modal';
import { ListItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem =({}) {
  state = {
    showModal: false,
  };

  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  handleModal = e => {
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
