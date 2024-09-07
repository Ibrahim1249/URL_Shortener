import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Home from './Home'
import Login from './components/Login'

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
       <Route path='/login' element={<Login />}/>
       <Route path='/register' element={<Register />}/>
    </Routes>
    
    </BrowserRouter>
   </>
  )
}

export default App