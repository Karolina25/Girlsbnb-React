import React from 'react'
import './index.css'
import { useEffect, useState } from "react";
import { functionSlide } from '../Carousel/Carousel';

const Accommodation = ({accommodation}) => {
  const [accomodatio, setAccomodatio] = useState([]);
  const [index, setIndex] = useState(0);

useEffect(()=>{
    if(index > 0){
        let currentIndex = index+1;
        if (currentIndex > accommodation.length) currentIndex = 0;
        let featureCardssWillShow = functionSlide(accommodation ,8,currentIndex)
        setAccomodatio(featureCardssWillShow);
        setTimeout(() => setIndex(currentIndex), 3500);
      }else{
        let currentIndex = index+1;
        setTimeout(() => setIndex(currentIndex), 3500);
      }
},[accommodation, index]) 

return(
    accomodatio.map((item, index) => {   
        return( 
            <div className='container-accommodation'>
                <img className="img-accommodation" src={item.image_url} alt={item.country}></img>  
                <div className='title-accommodation'>
                    <div className='cont-title-superhost'>
                        <h2 className='title-superhost'>superhost</h2>
                    </div>
                    <h3 className='title-city'>{item.country}</h3>
                    <div className='cont-title-score'>
                        <h2 className='title-score'>{item.rating}</h2>
                    </div>
                </div>
                <p className='price-accommodation'>{item.price}</p>
            </div>     
        )
    })
    )
}

export default Accommodation
