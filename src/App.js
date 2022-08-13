import {BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/pages/Home'
import Produtos from './components/pages/Produtos'
import Institucional from './components/pages/Institucional'
import Login from './components/pages/Login'
import Navbar from './components/pages/Navbar'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/allusers" element={<Navigate to="/users" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={ <Produtos />} />
      </Routes> 
      
    </BrowserRouter>

  )
  
}

export default App