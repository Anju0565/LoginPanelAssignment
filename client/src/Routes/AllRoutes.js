import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Admin from '../components/Admin'
import User from '../components/User'
import Home from '../components/Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
    </Routes>
  )
}

export default AllRoutes