import React from "react";
import './index.css';
import picture from '../images/highlyImage.png'
import { useEffect, useState } from "react";
import { functionSlide } from '../Carousel/Carousel';


const Featured = ({features, verifiedDescription, description}) => {
  console.log("features",features);
  const [featured, setFeatured] = useState([]);
  const [index, setIndex] = useState(0);

useEffect(()=>{
    if(index > 0){
        let currentIndex = index+1;
        if (currentIndex > features.length) currentIndex = 0;
        let featureCardssWillShow = functionSlide(features ,3,currentIndex)
        setFeatured(featureCardssWillShow);
        setTimeout(() => setIndex(currentIndex), 3500);
      }else{
        let currentIndex = index+1;
        setTimeout(() => setIndex(currentIndex), 3500);
      }
},[features, index]) 
  return(
    featured.map((item)=>{
      return(
        <div className="container-featured">
          <img className="image-featured" src={picture} alt="imageFeatured"></img> 
          <p className="link">@</p>
          <h2>{verifiedDescription}</h2>
          <p className="time">{description}</p>
        </div>
      )
    })
    
  )
}

export default Featured;