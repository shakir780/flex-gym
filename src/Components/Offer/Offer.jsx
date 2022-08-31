import React from 'react'
import { OfferData } from '../../data/OfferData'
import './Offer.css'

const Offer = () => {
  return (
    <section className="offer" id='programs'>
        <div className="offer-text">
            
                
                <span className='stroke-text'>What</span>
                <span>we</span>
                <span>can</span>
                <span className='stroke-text'>offer</span>
                
                
          
        </div>
        <div className="offers-category">
        {OfferData.map((Offer)=>(
            <div className="offer-cat">
                <div className="offer-cat-img">
                <img src={Offer.image}  />
      
                </div>
                <div className="offer-display">

                <div className="offer-cat-text">
      <span>{Offer.header}</span>
      <span>{Offer.subheader}</span>
      </div>

      <div className="offer-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"/></svg>
      </div>

                </div>

            </div>
        ))}
               
       </div>
        
    </section>
  )
}

export default Offer