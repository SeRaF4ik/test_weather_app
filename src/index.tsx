import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { PUBLIC_URL } from './utils/constants/app.constants'

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter basename={PUBLIC_URL}>
    <App />
  </BrowserRouter>
)
