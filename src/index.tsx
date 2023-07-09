import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { PUBLIC_URL } from './utils/constants/app.constants'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter basename={PUBLIC_URL}>
    <App />
  </BrowserRouter>
)
