const Modal = props => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{props.title}</h2>
          <button className="modal-close-button" onClick={props.onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
