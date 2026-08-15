import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Index'
import Index from './Index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>
)
