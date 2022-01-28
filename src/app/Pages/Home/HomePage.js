import React, {useState, useEffect} from "react";
import HomeTemplate from "../../Templates/HomeTemplate/HomeTemplate";
import {getAll} from "../../../data/api/ApiService";
import CardGroupOfSix from "../../Componentes/CardGroupOfSix/CardGroupOfSix";
import Featured from "../../Componentes/Featured/Featured";

const HomePage = ()=>{
  const [accommodation, setAccommodation]=useState([]);
  
  const getAccommodation = async () => {
    const data = await getAll("accommodations");
    if (data) {
    setAccommodation([...data]);
    }
  } 

  useEffect(() => {
    getAccommodation();
  }, []);
  
    return(<>
          <HomeTemplate accommodation={accommodation} />
          <CardGroupOfSix
          description="Multi-day hackatons organized by local experts with activities, meals and accommodation included"
          title="Discover Chairdnb adventures"
          />
          <CardGroupOfSix
          description="Multi-day extreme programming sessions organized by local experts with activities, meals and accommodation included"
          title="Highly rated experiences"
          />
          <Featured
            verifiedDescription="More than 200 verified stays"
            description="From 577 € / person - 3 days"
          />
          </>
    )
}

export default HomePage;
