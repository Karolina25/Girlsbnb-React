import React from "react";
import CardHighly from "../CardHighly/CardHighly";
import './index.css';

const CardHighlyGroup = () => {
  let numbers= [1,2,3,4,5,6];
  return (
  <div className="card-highly">
    <h1>Highly rated experiences</h1> 
    <p className="description-card">Multi-day extreme programming sessions organized by local experts with activities, meals and accommodation included</p>
    <div className="card-group">
      {numbers.map(e => <CardHighly
        title="Mongolia"
        promotion="2 Nights all inclusive"
        description="From 577 € / person - 3 days"
        rating="5.0 " />)}
    </div>
  </div>
  )
}

export default CardHighlyGroup;