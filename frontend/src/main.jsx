import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import "react-quill/dist/quill.snow.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)