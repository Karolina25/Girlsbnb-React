import React from "react";
import './index.css';
import picture from '../images/highlyImage.png'

const CardHighly = ()=>{
  return ( 
    <div className="card">
      <img src={picture} alt="imageHighly"></img>
      <label>Mongolia</label>
      <h2>2 Nights all inclusive</h2>
      <p className="time">From 577 € / person - 3 days</p>
      <div className="flex flex-row g-4 align-center">
        <p className="rate mt-auto">5.0 </p>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#008489"/>
        </svg>
      </div>
    </div>
  )
}

export default CardHighly;