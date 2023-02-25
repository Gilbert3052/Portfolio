import React from 'react'
import Gilbert_CV_ from "../../assets/Gilbert_CV.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Gilbert_CV_} download="Gilbert´s_CV" className='btn'>Download CV </a>
        <a href="#footer" className='btn btn-primary'>Let´s Talk</a>
    </div>
  )
}

export default CTA