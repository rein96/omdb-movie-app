import React from 'react'
import logo from 'images/RALogoOriginal.png'
import './Navbar.scss'

function Navbar() {
  return (
    <header className='header-container'>
      <nav className='navbar-container'>
        <img className='movie-brand-logo' src={logo} alt='movie RA logo'/>
        <input className='search-box' type='text' placeholder='Search Movie Title...'/>
      </nav>
    </header>
  )
}

export default Navbar
