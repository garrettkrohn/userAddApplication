import React from "react";
import Button from "./Button";
import "./Modal.css";

const Modal = (props) => {
  const continueButtonHandler = () => {
    props.toggleModal();
  };

  return (
    <div>
      <div className="backdrop" onClick={continueButtonHandler}></div>
      <div className="modal-container">
        <div className="modal-header">Invalid input</div>
        <div className="modal-text">{props.error}</div>
        <div className="continue-button-container">
          <Button
            customClickEvent={continueButtonHandler}
            className="continue-button"
            label="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
