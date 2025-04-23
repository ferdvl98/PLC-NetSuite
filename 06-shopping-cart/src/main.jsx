import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FiltersPrivider } from './context/filters.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersPrivider>
    <App />
  </FiltersPrivider>
)
