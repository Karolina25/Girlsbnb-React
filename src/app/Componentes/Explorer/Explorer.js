import React from "react";
import './index.css';

const Explorer = ({title, image, description, nameHref }) => {
    return(
      <a href={nameHref}>
        <div className="container-explorer">
            <img className="image-explorer" src={image} alt={description}/>
            <p className="title-explorer">{title}</p>
        </div>
      </a>
    )
}
export default Explorer;