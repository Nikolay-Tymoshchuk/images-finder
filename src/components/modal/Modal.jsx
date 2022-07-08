import PropTypes from 'prop-types';

import { Overlay, Content } from './Modal.styled';

const Modal = props => {
  return (
    <Overlay>
      <Content class="modal">
        <img src="" alt="" />
      </Content>
    </Overlay>
  );
};

export default Modal;
