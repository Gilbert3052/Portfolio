import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gilbert-angulo-79a0191a4/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Gilbert3052" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials