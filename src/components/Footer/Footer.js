import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <span className='name'>
        Newzz App made by -{' '}
        <a href='https://www.linkedin.com/in/arijeetsingh/' target='__blank'>
          Arijeet Singh
        </a>
      </span>
      <hr style={{ width: '90%' }} />
      <div className='iconContainer'>
        <a href='https://www.instagram.com/arijeet_singh_/' target='__blank'>
          <InstagramIcon />
        </a>
        <a href='https://www.linkedin.com/in/arijeetsingh/' target='__blank'>
          <LinkedInIcon />
        </a>
        <a href='https://github.com/arijeetsingh' target='__blank'>
          <GitHubIcon />
        </a>
        <a href='https://leetcode.com/BearAxe/' target='__blank'>
          <CodeIcon />
        </a>
      </div>
    </div>
  )
}

export default Footer
