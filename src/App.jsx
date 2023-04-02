import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  
  

  return (
    <div className="App">
      <Navbar></Navbar>

      <h1 className='text-2xl text-blue-700'>This is tailwind project</h1>
      
    </div>
  )
}

export default App
