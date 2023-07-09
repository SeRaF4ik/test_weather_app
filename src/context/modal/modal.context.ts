import { createContext } from 'react'

import { ModalDataModel } from '~/types/app.models'

interface ModalContextProps {
  modal: ModalDataModel
  setModal: (data: ModalDataModel) => void
}

const ModalContext = createContext<ModalContextProps>({
  modal: {
    show: false,
    title: '',
    text: ''
  },
  setModal: () => {}
})

export default ModalContext
