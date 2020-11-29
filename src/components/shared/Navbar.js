import React from 'react'
import logo from 'images/RALogoOriginal.png'
import './Navbar.scss'

function Navbar() {
  return (
    <header className='header-container'>
      <nav className='navbar-container'>
        <img className='movie-brand-logo' src={logo} alt='movie RA logo' />
        <div className='search-and-dropdown'>
          <input className='search-box' type='text' placeholder='Search Movie Title...' />
          <div className='dropdown-search-container'>
            <div className='movie-list'>
              Shrek
            </div>
            <div className='movie-list'>
              Shrek 2
            </div>
            <div className='movie-list'>
              Shrek 3
            </div>
            <div className='movie-list'>
              Shrek 4
            </div>
            <div className='movie-list'>
              Shrek 5
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
