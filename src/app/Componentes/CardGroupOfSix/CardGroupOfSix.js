import React from "react";
import CardHighly from "../CardHighly/CardHighly";
import './index.css';

const CardGroupOfSix = ({title, description, adventures, nameId}) => {
  return (
  <div className="card-highly" id={nameId}>
    <h1>{title}</h1> 
    <p className="description-card">{description}</p>
    <div className="card-group">
      {adventures.map(e => <CardHighly
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