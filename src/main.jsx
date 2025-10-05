import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import classes from './Main.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className={classes.background}>
      <App />
    </div>
  </StrictMode>,
)

