import React from "react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";

interface Props {
  clicked: () => void;
  show: boolean;
  title?: string;
}

const Modal: React.FC<Props> = (props) => {
  return (
    <BootstrapModal
      show={props.show}
      onHide={props.clicked}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{props.title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{props.children}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={props.clicked}>
          Close
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
