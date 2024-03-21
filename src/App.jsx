import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-gray-950 font-bold text-center'>Humaion Kobir</h1>
        <div className="sub-ex">
          <h1 className='name'>Kobir</h1>
        </div>
      </div>
    </>
  )
}

export default App
