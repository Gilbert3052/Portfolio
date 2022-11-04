import React from 'react'
import "./portfolio.css"
import portfolio1 from "../../assets/portfolio1.png"
import portfolio2 from "../../assets/portfolio2.png"
import portfolio3 from "../../assets/portfolio3.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: portfolio1,
      title: "Pokedex",
      github: "https://github.com/Gilbert3052/Pokedex",
      demo: "https://pokedex-3052.netlify.app",
      description: "Single Page Application where you can find your favorite Pokemon!"
    },
    {
      id: 2,
      image: portfolio2,
      title: "Rick & Morty",
      github: "https://github.com/Gilbert3052/Rick-Morty-React",
      demo: "https://rick-morty-3052.netlify.app",
      description: "Application where you can see Rick And Morty´s characters in their different Universes"
    },
    {
      id: 3,
      image: portfolio3,
      title: "Weather App",
      github: "https://github.com/Gilbert3052/weather-app",
      demo: "https://weather-app-3052.netlify.app",
      description: "Here you can see the weather at your ubication"
    },
  ]
 

  return (
    <section id='portfolio' className='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, description}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <div className="text__img">
                    <p>{description}</p>
                  </div>
                  <a href={demo} target="_blank"><img className='img__item' src={image} alt={title} /></a>
                </div>
                <div className="title__item">
                  <a href={demo} target="_blank"><h3>{title}</h3></a>
                </div>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }     
      </div>
    </section>
  )
}

export default Portfolio