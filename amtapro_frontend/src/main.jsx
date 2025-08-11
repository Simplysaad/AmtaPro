import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cursor from './Pages/Cursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cursor />
    <App />
  </StrictMode>,
)
