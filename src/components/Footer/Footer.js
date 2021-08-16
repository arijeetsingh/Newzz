import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <span className='name'>
        Inshorts App made by -{' '}
        <a href='https://www.linkedin.com/in/arijeetsingh/' target='__blank'>
          Arijeet Singh
        </a>
      </span>
      <hr style={{ width: '90%' }} />
      <div className='iconContainer'>
        <a href='https://www.instagram.com/arijeet_singh_/' target='__blank'>
          <i className='fab fa-instagram-square fa-2x'></i>
        </a>
        <a href='https://www.linkedin.com/in/arijeetsingh/' target='__blank'>
          <i className='fab fa-linkedin fa-2x'></i>
        </a>
        <a href='https://github.com/arijeetsingh' target='__blank'>
          <i className='fas fa-github fa-2x'></i>
        </a>
        <a href='https://leetcode.com/BearAxe/' target='__blank'>
          <i className='fas fa-code fa-2x'></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
