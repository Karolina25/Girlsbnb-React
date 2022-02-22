import React from "react";
import './index.css'
import { Accommodation, SearchHome, Explorer } from "../../Componentes/index";
import CardGroupOfSix from "../../Componentes/CardGroupOfSix/CardGroupOfSix";
import picture from '../../Componentes/images/girlsbnbPortada.png';


const HomeTemplate = ({accommodation, adventures, experiences, allPlaces})=>{
    return(
        <div>
            <img src={picture} alt="Portada" className="portada"></img>
            <div className="container-components">
                <SearchHome 
                  className="container-searchHome"
                  allPlaces={allPlaces}
                />
                <h2 className="subTitle">Explorer Chairdnb</h2>
                <div className="container-ExplorerChairdnb">
                    <Explorer nameHref="#Accommodations" title="Accommodations" image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg" description="Paracas"></Explorer>
                    <Explorer nameHref="#Experiences" title="Experiences" image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg" description="Paracas"></Explorer>
                    <Explorer nameHref="#Adventures" title="Adventures" image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg" description="Paracas"></Explorer>
                </div>
                <h2 className="subTitle">Chairdnb Plus accommodation</h2>
                <CardGroupOfSix
                    nameId={'Adventures'}
                    adventures={adventures}
                    title="Discover adventures"
                    description="Multi-day hackatons organized by local experts with activities, meals and accommodation included"
                />
                <h2 className="subTitle" id='Accommodations'>Accommodation around the world</h2>
                <div className="group-accommodation">
                {accommodation.map((item, index) => {        
                    return( 
                            <Accommodation
                            img={item.image_url}
                            city={item.name}
                            score={item.rating}
                            price={`From ${item.price} "€ / person - 3 days`}/>     
                    )
                })}
                </div>
                <CardGroupOfSix
                    adventures={experiences}
                    nameId={'Experiences'}
                    title="Highly rated experiences"
                    description="Multi-day extreme programming sessions organized by local experts with activities, meals and accommodation included"
                />
            </div>
        </div>
    )

}
export default HomeTemplate;