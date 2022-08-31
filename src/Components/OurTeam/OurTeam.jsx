import React from 'react'
import './OurTeam.css'
import team1 from '../../assets/team-1.jpg'
import team2 from '../../assets/team-2.jpg'
import team3 from '../../assets/team-3.jpg'
import team4 from '../../assets/team-4.jpg'
import team5 from '../../assets/team-5.jpg'
import team6 from '../../assets/team-6.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { ourTeamData } from '../../data/OurTeamData'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", height:"10rem",display:'none'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", display:'none' }}
      onClick={onClick}
    />
  );
}

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide:0,
    autoplay: true,
    
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
  
        
       <div className="ourTeam" id='ourTeam'>


<div className="ourTeamTest">
            
                
            <span className='stroke-text'>Meet</span>
            <span>Our</span>
            <span className='stroke-text'>Team</span>
            
            
      
    </div>
<Slider {...settings} >

{ourTeamData.map((team)=>(
  <div className="ourTeamContainer">
    <div className="ourTeamTop">
      <img src={team.image} alt={team.title} />
      <div class="content-details fadeIn-top">
        <h3>{team.name}</h3>
        <p>{team.status}</p>
      </div>
    </div>
  </div>
))}



</Slider>
</div>
      
     

       
  )
}

export default OurTeam