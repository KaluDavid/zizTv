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
import { Services } from './pages/ServicePage/Services'
import { Portfolio } from './pages/PortfolioPage/Portfolio'
import { Client } from './pages/PortfolioPage/Clients/Client'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} >
        <Route path="client" element={<Client />} />
      </Route>

      <Route path="/auth" element={<Auth />} >
        <Route index element={<Started />} />
        <Route path='password' element={<EnterPwd />} />
        <Route path='verifyEmail' element={<VerifyEmail />} />
        <Route path="login" element={<Login />} />
      </Route>


      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
}

export default App
