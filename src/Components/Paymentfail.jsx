import React from 'react'
import "../Style/paymentfail.css"
import {Link} from "react-router-dom"
const Paymentfail = () => {
  return (
    <div className='Paymentfail-main'>
        <div className="fail-cont">
        <h1>Payment Fail</h1>
        <Link to="/">Go to homePage</Link>
        </div>
    </div>
  )
}

export default Paymentfail