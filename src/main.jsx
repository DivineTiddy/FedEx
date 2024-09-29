import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GloblaStyle from './style/GloblaStyle.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <GloblaStyle/>
    <App />
    </>
  </StrictMode>,
)
