import { createContext } from 'react'

const ModalContext = createContext({
  modal: {
    show: false,
    title: '',
    text: ''
  },
  setModal: () => {}
})

export default ModalContext
