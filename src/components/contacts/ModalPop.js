import React, { Component } from 'react'
import ReactModal from 'react-modal'

export default class ModalPop extends Component {
   state = {
      showModal: false,
   }

   handleOpenModal = () => {
      this.setState({ showModal: true })
   }

   handleCloseModal = () => {
      this.setState({ showModal: false })
   }

   render() {
      const { showModal } = this.state
      return (
         <div style={{ marginTop: '80px' }}>
            <button type="button" onClick={this.handleOpenModal}>
               Trigger Modal
            </button>
            <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
               <button type="button" onClick={this.handleCloseModal}>
                  Close Modal
               </button>
            </ReactModal>
         </div>
      )
   }
}
