import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SupportPage from './Support/SupportPage'
import HomePage from './Home/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <HomePage />
    </>
  </StrictMode>
)
