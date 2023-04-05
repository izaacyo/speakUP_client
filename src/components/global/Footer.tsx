import React from 'react'
import Logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div className="text-center bg-light py-4">
      <h6>SPEAKUP</h6>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '100px' }} />
      </div>
      <p> Copyright &copy; 2023</p>
    </div>
  )
}

export default Footer