import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoApp } from './Todoapp'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
)