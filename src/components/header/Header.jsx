import React from 'react'
import CTA from './CTA'
import "./header.css"
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header id="home" className='header'>
      <div className="container header__container">
        <h5>Hello I´m</h5>
        <h1>Gilbert Angulo</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img src="" alt="me_photo" />
        </div> */}

        <a href="#portfolio" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header