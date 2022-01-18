import React from "react";
import HomeTemplate from "../../Templates/HomeTemplate/HomeTemplate";
import CardGroupOfSix from "../../Componentes/CardGroupOfSix/CardGroupOfSix";

const HomePage = ()=>{
    return(
        <>
          <HomeTemplate></HomeTemplate>
          <CardGroupOfSix
          description="Multi-day hackatons organized by local experts with activities, meals and accommodation included"
          title="Discover Chairdnb adventures"
          />
          <CardGroupOfSix
          description="Multi-day extreme programming sessions organized by local experts with activities, meals and accommodation included"
          title="Highly rated experiences"
          />
        </> 
    )
}

export default HomePage;
