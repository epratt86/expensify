import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
  <Modal
    //if the state is 'undefined' the '!!' flips undefined to false 
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelected}
    contentLabel="selected option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelected}>Got it!</button>
  </Modal>
);

export default OptionModal;