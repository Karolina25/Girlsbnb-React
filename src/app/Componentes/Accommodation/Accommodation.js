import React from 'react'
import './index.css'

const Accommodation = ({city, score, price, img}) => {
    return (
        <div className='container-accommodation'>
            <img className="img-accommodation" src={img} alt="South Bend"></img>  
            <div className='title-accommodation'>
                <div className='fifty-percent'>
                    <div className='cont-title-superhost'>
                        <h2 className='title-superhost'>superhost</h2>
                    </div>
                    <h3 className='title-city'>{city}</h3>
                </div>
                <div>
                    <h2 className='title-score'>{score}</h2>
                </div>   
            </div>
            <p className='price-accommodation'>{price}</p>
        </div>
    )
}

export default Accommodation
