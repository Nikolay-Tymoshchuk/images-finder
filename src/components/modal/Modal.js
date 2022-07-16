import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Content } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

function Modal({ children, onClose }) {
  useEffect(() => {
    console.log('useEffect :>> ');
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [children]);

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
