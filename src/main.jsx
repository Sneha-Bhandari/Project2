import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Component/Navigation/Header'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

      <Header/>
    <App />
    </Router>
  </StrictMode>,
)
