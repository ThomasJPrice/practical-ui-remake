import React from 'react'
import './Navbar.css'

import logo from '../../assets/practical-ui-logo.svg'

const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="section-container navbar-container">
        <a href="https://www.practical-ui.com/">
          <img src={logo} alt="logo" className='navbar-logo' />
        </a>
      </div>
    </div>
  )
}

export default Navbar