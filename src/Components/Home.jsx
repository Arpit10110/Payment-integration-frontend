import React from 'react'
import "../Style/Home.css"
import Iphone from "../assets/Iphone.png"
import axios from "axios"
const Home = () => {
  const buyit = async(amount)=>{
    console.log(amount)
    const {data:{order}}= await axios.post("https://payment-integration-kzhh.onrender.com/checkout",{
      amount
    })
    console.log(order)
    const options = {
      key: "rzp_test_zX8JwR7ErLD2Nw", 
      amount: order.amount, 
      currency: "INR",
      name: "Arpit telecom",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/120322314?v=4",
      order_id: order.id, 
      callback_url:"https://payment-integration-kzhh.onrender.com/paymentverifification",
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#3399cc"
      }
  };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }
  return (
    <div className='Home-main'>
      <div className="card">
        <img src={Iphone} alt="iphone" />
        <div className="detail">
            <h3>₹105</h3>
            <button onClick={()=>buyit(105)}  >Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home