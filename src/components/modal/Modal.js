import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Content } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    console.log('done:>> ');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return createPortal(
      <Overlay>
        <Content>{this.props.children}</Content>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
