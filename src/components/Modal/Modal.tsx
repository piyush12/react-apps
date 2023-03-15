import React from "react";

function Modal({ children }) {
  return (
    <div>
      Modal
      {children}
    </div>
  );
}

function ModalHeader() {
  return <div>Header</div>;
}

// export default Modal;

export default Object.assign(Modal, {
  Header: ModalHeader,
});
