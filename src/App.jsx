import React from 'react'
import {HashRouter as Router, Routes, Route } from "react-router-dom"
import "./Style/Style.css"
import Home from "./Components/Home.jsx"
import PaymentSucces from "./Components/PaymentSucces.jsx"
import Paymentfail from "./Components/Paymentfail.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/paymentsuccess" element={<PaymentSucces/>} />
        <Route path="/paymentfail" element={<Paymentfail/>} />
      </Routes>
    </Router>
  )
}

export default App
