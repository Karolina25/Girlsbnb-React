import React from 'react'
import './index.css'

const Accommodation = ({city, score, price}) => {
    return (
        <div className='container-accommodation'>
            <img className="img-accommodation" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qXzxoQ1wTrqzE3elhHF7EZuwf9Om4WSnqw&usqp=CAU" alt="South Bend"></img>  
            <div className='title-accommodation'>
                <div className='cont-title-superhost'>
                    <h2 className='title-superhost'>superhost</h2>
                </div>
                <h3 className='title-city'>{city}</h3>
                <div className='cont-title-score'>
                    <h2 className='title-score'>{score}</h2>
                </div>
            </div>
            <p className='price-accommodation'>{price}</p>
        </div>
    )
}

export default Accommodation
