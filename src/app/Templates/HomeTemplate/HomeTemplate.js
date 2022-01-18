import React from "react";
import './index.css'
import { Accommodation, SearchHome } from "../../Componentes/index";
import { Explorer } from "../../Componentes/index";

const HomeTemplate = ()=>{
    return(
        <div>
            <SearchHome></SearchHome>
        <div className="container-ExplorerChairdnb">
            <Explorer title="Accommodations" image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg" description="Paracas"></Explorer>
            <Explorer title="Experiences" image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg" description="Paracas"></Explorer>
            <Explorer title="Adventures" image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg" description="Paracas"></Explorer>
        </div>
        <Accommodation></Accommodation>
        </div>
    )

}
export default HomeTemplate;