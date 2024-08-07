import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt=''/>
      <ul className='menu'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
