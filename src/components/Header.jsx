import React from 'react'
import Header from "../assets/images/header.png"

function Heade() {
  return (
    <div className="header">
      <img src={Header} alt="img" style={{width:"100%"}} />
      <p>!اینهمه بسته بی‌سابقه‌ست</p>
      <span>!اینجا چه خبره</span>
    </div>
  )
}

export default Heade