import { useState } from 'react'



import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
<Navbar/>
<Home/>

    </BrowserRouter>

  )
}

export default App
