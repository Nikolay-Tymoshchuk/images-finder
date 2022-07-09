import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Modal from '../modal';
import { ListItem, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends PureComponent {
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
    console.log('this.state :>> ', this.state);
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
