import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/register' element={<RegistrationPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>

    </>
  )
}

export default App