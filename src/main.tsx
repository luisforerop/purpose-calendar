import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CalendarRouter } from './router/CalendarRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalendarRouter />
  </React.StrictMode>
)
