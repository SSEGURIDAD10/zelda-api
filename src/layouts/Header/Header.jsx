import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav className='header'>
        <a href='/' className='header__logo'>Zelda Lull-Api</a>
        <ul className='header__nav-list'>
          <li className='header__list-link'>Home</li>
          <li className='header__list-item'>Dashboard</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header