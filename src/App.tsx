import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BasePage from '@c/BasePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BasePage />
  )
}

export default App
