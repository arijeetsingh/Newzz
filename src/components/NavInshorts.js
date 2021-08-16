import React from 'react'
import './NavInshorts.css'
import HamburgerDrawer from './HamburgerDrawer.js'

const NavInshorts = ({ setCategory }) => {
  return (
    <div className='nav'>
      <div className='icon'>
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: 'pointer' }}
        src='Newzz.png'
        height='100%'
        alt='Logo'
      />
    </div>
  )
}

export default NavInshorts
