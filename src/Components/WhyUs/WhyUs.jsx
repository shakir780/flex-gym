import React from 'react'
import { WhyUsData } from '../../data/WhyusData'
import './WhyUs.css'
import {motion} from 'framer-motion'

const WhyUs = () => {

  return (
    <section className="WhyUs" id='whyUs'
   
       >
     <div className="whyus-text">
     <span className='stroke-text'
       
     >Why</span>
        <span>choose</span>
        <span className='stroke-text'>Us</span>
     </div>
     <div className="whyus-categories">
      {WhyUsData.map((whyus)=>(
        <div className="category">
          {whyus.icon}
          <span>{whyus.heading}</span>
          <span>{whyus.details}</span>
        </div>
      ))}
     </div>
    </section>
  )
}

export default WhyUs