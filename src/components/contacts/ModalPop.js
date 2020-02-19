import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class ModalPop extends Component {
  state = {
    showModal: false,
  };
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div style={{ marginTop: '80px' }}>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}
