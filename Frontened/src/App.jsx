import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Home from './Home'
import Login from './components/Login'

import { ProfileDrawer } from './components/profile-drawer'

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
       <Route path='/login' element={<Login />}/>
       <Route path='/register' element={<Register />}/>
       <Route path='/profile' element={<ProfileDrawer/>}/>
    </Routes>
    
    </BrowserRouter>
   </>
  )
}

export default App