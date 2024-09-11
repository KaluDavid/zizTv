import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/homgePage/Home'
import About from './pages/aboutUs/About'
import Auth from './user-auth/Auth'
import Error from './pages/Error'
import { Started } from './user-auth/signUp-flow/Started'
import { EnterPwd } from './user-auth/signUp-flow/EnterPwd'
import { VerifyEmail } from './user-auth/signUp-flow/VerifyEmail'
import { Login } from './user-auth/SignIn-flow/Login'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="auth" element={<Auth />} >
        <Route index replace element={<Started />} to="started" />
        <Route path='password' element={<EnterPwd />} />
        <Route path='verifyEmail' element={<VerifyEmail />} />
        <Route path="login" element={<Login />} />
      </Route>


      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
}

export default App