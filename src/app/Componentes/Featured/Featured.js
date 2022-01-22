import React from "react";
import './index.css';
import picture from '../images/highlyImage.png'

const Featured = ({verifiedDescription, description}) => {
  return(
    <div className="container-featured">
      <img className="image-featured" src={picture} alt="imageFeatured"></img> 
      <p className="link">@</p>
      <h2>{verifiedDescription}</h2>
      <p className="time">{description}</p>
    </div>
  )
}

export default Featured;