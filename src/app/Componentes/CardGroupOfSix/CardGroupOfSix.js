import React from "react";
import CardHighly from "../CardHighly/CardHighly";
import { useEffect, useState } from "react";
import { functionSlide } from '../Carousel/Carousel';
import './index.css';

const CardGroupOfSix = ({title, description, adventures}) => {
  const [adventure, setAdventure] = useState([]);
  const [index, setIndex] = useState(0);

useEffect(()=>{
    if(index > 0){
        let currentIndex = index+1;
        if (currentIndex > adventures.length) currentIndex = 0;
        let featureCardssWillShow = functionSlide(adventures ,6,currentIndex)
        setAdventure(featureCardssWillShow);
        setTimeout(() => setIndex(currentIndex), 3500);
      }else{
        let currentIndex = index+1;
        setTimeout(() => setIndex(currentIndex), 3500);
      }
},[adventures, index]) 
  return (
  <div className="card-highly">
    <h1>{title}</h1> 
    <p className="description-card">{description}</p>
    <div className="card-group">
      {adventure.map(e => <CardHighly
        title =  {e.name}
        promotion="2 Nights all inclusive"
        description="From 577 € / person - 3 days"
        picture={e.image_url}
        rating={e.rating} />)}
    </div>
  </div>
  )
}

export default CardGroupOfSix;