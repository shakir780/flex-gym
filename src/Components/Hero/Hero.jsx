import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition={type:'spring',duration:3}
  return (
    <section className='hero' id='home'>
        <Header /> 
       
        <div className="hero-text-overlay">
        <div className="the-best-ad">
          <motion.div
          initial={{left:"238px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
            <div>  <span>Shape your body</span></div>
            <div> <span>Be  <span>strong</span> </span></div>
            <div><span>Training Hard</span></div>
     
            <div className="figures">

            <div><span><NumberCounter end={140} start={100} delay='4' preFix="+"></NumberCounter></span><span>expert coaches</span></div>
      <div><span><NumberCounter end={978} start={800} delay='4' preFix="+"></NumberCounter></span><span>members joines</span></div>
      <div><span><NumberCounter end={50} start={0} delay='4' preFix="+"></NumberCounter></span><span>fitness programs</span></div>

</div>

            <button className='btn hero-btn'>Get info</button>
         
        </div>
      <div className="right-overlay">
      
      </div>
    </section>
  )
}

export default Hero