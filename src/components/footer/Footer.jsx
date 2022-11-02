import React from 'react'
import "./footer.css"
import {BsLinkedin, BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className='footer__logo'>Gilbert</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/gilbert-angulo-79a0191a4/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Gilbert3052" target="_blank"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gilbert. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer