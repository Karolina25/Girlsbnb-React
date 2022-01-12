import React from "react";
import './index.css';

const Explorer = ({title, image, description }) => {
    return(
        <div className="container-explorer">
            <img className="image-explorer" src={image} alt={description}/>
            <p className="title-explorer">{title}</p>
        </div>
    )
}
export default Explorer;