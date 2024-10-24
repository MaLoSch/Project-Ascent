import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './typography.scss'
import './color.scss'

createRoot(document.getElementById('app')).render(
  <App />
)
