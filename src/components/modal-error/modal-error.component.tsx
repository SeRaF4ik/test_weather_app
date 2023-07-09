import React, { useContext } from 'react'

import { Alert, Modal } from 'react-bootstrap'

import ModalContext from '~/context/modal/modal.context'

import './modal-error.style.scss'

const ModalError = () => {
  const { modal, setModal } = useContext(ModalContext)

  return (
    <Modal
      show={modal.show}
      onHide={() => setModal({ show: false, title: '', text: '' })}
    >
      <Alert
        variant="danger"
        onClose={() => setModal({ show: false, title: '', text: '' })}
        dismissible
        className="modal_alert"
      >
        <Alert.Heading>{modal.title}</Alert.Heading>
        <p>{modal.text}</p>
      </Alert>
    </Modal>
  )
}

export default ModalError
