import React from 'react'
import {Link} from "react-router-dom"
import "../Style/paymentsucces.css"
const PaymentSucces = () => {
  return (
    <div className='PaymentSucces-main'>
        <div className="cont">
        <h1>Payment SuccesFull</h1>
        <Link to="/">Go to homePage</Link>
        </div>
    </div>
  )
}

export default PaymentSucces