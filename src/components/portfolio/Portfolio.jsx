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
      demo: "https://pokedex-3052.netlify.app"
    },
    {
      id: 2,
      image: portfolio2,
      title: "Rick & Morty",
      github: "https://github.com/Gilbert3052/Rick-Morty-React",
      demo: "https://rick-morty-3052.netlify.app"
    },
    {
      id: 3,
      image: portfolio3,
      title: "Weather App",
      github: "https://github.com/Gilbert3052/first-crud",
      demo: "https://crud-3052.netlify.app"
    },
  ]
 

  return (
    <section id='portfolio' className='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
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