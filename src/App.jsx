import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceList from './Components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
    </div>
  )
}

export default App
