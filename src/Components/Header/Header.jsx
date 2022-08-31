import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Header = () => {
  const [active,SetActive]=useState("nav__menu")
  const [icon,setIcon]=useState("nav__toggler")

  const navToggle=()=>{
    if(active === 'nav__menu'){
      SetActive("nav__menu nav__active")
    }
    else SetActive("nav__menu")
  
  //icon toggler
  if(icon === "nav__toggler"){
    setIcon("nav__toggler toggle")
  }
  else setIcon("nav__toggler")
  
  }
  return (
    
    
    <nav className='nav'>
      <a href="#" className='nav__brand'>
        FLEX GYM
      </a>
      <ul className={active}>
        <li className='nav__item'>
          <Link onClick={()=>{
            SetActive('nav__menu')
            setIcon("nav__toggler")
          } } to='home' spy={true} smooth={true}>
          <a href="" className='nav__link' >Home</a>

          </Link>
        </li>
        <li className='nav__item'>
        <Link onClick={()=>{
            SetActive('nav__menu')
            setIcon("nav__toggler")
          } } to='programs' spy={true} smooth={true}>
          <a href="" className='nav__link' >Programs</a>

          </Link>
        </li>

        <li className='nav__item'>
        <Link onClick={()=>{
            SetActive('nav__menu')
            setIcon("nav__toggler")
          } } to='whyUs' spy={true} smooth={true}>
        <a href="" className='nav__link' >Why us</a>

        </Link>

        </li>

        
        <li className='nav__item'>
        
        <Link onClick={()=>{
            SetActive('nav__menu')
            setIcon("nav__toggler")
          } } to='testimonials' spy={true} smooth={true}>
        <a href="" className='nav__link' >Testimonials</a>

        </Link>
        </li>
        <li className='nav__item'spy={true} smooth={true}>
        <Link onClick={()=>{
            SetActive('nav__menu')
            setIcon("nav__toggler")
          } } to='ourTeam' spy={true} smooth={true}>
          <a href="" className='nav__link' >Our Team</a>
          
          </Link>
        </li>
      
        <div className="header-links">
        <img src={github} alt="" />
         <img src={instagram} alt="" />
         <img src={LinkedIn} alt="" />
       </div>

       
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Header