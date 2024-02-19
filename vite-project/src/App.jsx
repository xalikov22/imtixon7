import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Basket from './Pages/Basket/Basket'
import Sigin from './Pages/Sigin/Sigin'
import Dishes from './Pages/Dishes/Dishes'
import Login from './Pages/Login/Login'





function App() {
  
  return (
    <BrowserRouter>
      
        <Navbar/>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dishes' element={<Dishes/>} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/sigin' element={<Sigin />} />
      </Routes> 
   
       
    </BrowserRouter>

  )
}

export default App