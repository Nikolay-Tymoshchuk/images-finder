import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Content } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    this.props.onClose();
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Content>{this.props.children}</Content>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
