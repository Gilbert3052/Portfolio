import React from 'react'
import "./about.css"
import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about" className='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src="" alt="photo_me" />
          </div>
        </div> */}
        <div className="about__content">
          {/* <div className="about__cards"> */}
            {/* <article className="about__card">
              <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article> */}
            {/* <article className="about__card">
              <VscFolderLibrary className='about_icons'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div> */}

          <p>I´m a Front-Stack Web Development at Academlo, with knowledge on HTML, CSS, Javascript, React and Redux. Constantly learning about the new technologies</p>

          {/* <a href="#contact" className='btn btn-primary'>Let´s Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About