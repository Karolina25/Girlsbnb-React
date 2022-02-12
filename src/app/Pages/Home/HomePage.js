import React, {useState, useEffect} from "react";
import HomeTemplate from "../../Templates/HomeTemplate/HomeTemplate";
import {getAll} from "../../../data/api/ApiService";
import CardGroupOfSix from "../../Componentes/CardGroupOfSix/CardGroupOfSix";
import Featured from "../../Componentes/Featured/Featured";

const HomePage = ()=>{
  const [accommodation, setAccommodation]=useState([]);
  const [adventures, setAdventures]=useState([]);
  const [experiences, setExperiences]=useState([]);
  const [allPlaces, setAllPlaces] = useState([])
  
  const getAccommodation = async () => {
    const data = await getAll("accommodations");
    if (data) {
    setAccommodation([...data]);
    }
  } 

  const getAdventures = async () => {
    const data = await getAll("adventures");
    if (data) {
    setAdventures([...data]);
    }
  } 

  const getExperiences = async () => {
    const data = await getAll("experiences");
    if (data) {
    setExperiences([...data]);
    }
  } 
  
  const getPlaces = async () => {
    const data = await getAll("all");
    if (data) {
      setAllPlaces([...data]);
    }
  }

  useEffect(() => {
    getAccommodation();
    getAdventures();
    getExperiences();
    getPlaces();
  }, []);

    return(
        <>
          <HomeTemplate 
            accommodation={accommodation}
            adventures={adventures}
            experiences={experiences}
            allPlaces={allPlaces}
           />
          {/*<CardGroupOfSix
            adventures={adventures}
            title="Discover adventures"
            description="Multi-day hackatons organized by local experts with activities, meals and accommodation included"
          />
          <Featured
            verifiedDescription="More than 200 verified stays"
            description="From 577 € / person - 3 days"
          />*/}
        </> 
    )
}

export default HomePage;
