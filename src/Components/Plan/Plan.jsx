import React from 'react'
import { plansData } from '../../data/planData'
import whitetick from '../../assets/whiteTick.png'
import './Plan.css'

const Plan = () => {
  return (
    <div className='plans-container'>
        <div className="plans-header" style={{gap:'2rem'}}>
            <span className="stroke-text">TIME TO START</span>
            <span>YOUR JOURNEY</span>
            <span className="stroke-text">WITH US</span>
        </div>

        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whitetick} alt="" srcset="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div><span>See more benifits &rarr;</span>
        </div>
                    <button className='btn planBtn'>Enroll now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plan