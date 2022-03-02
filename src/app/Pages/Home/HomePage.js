import React, {useState, useEffect} from "react";
import HomeTemplate from "../../Templates/HomeTemplate/HomeTemplate";
import {getAll} from "../../../data/api/ApiService";

const HomePage = ()=>{
  const [accommodation, setAccommodation]=useState([]);
  const [adventures, setAdventures]=useState([]);
  const [experiences, setExperiences]=useState([]);
  const [features, setFeatured]=useState([]);
  const [allPlaces, setAllPlaces] = useState([])
  
  const getAccommodation = async () => {
    const data = await getAll("accommodations");
    if (data) {
    setAccommodation([...data]);
    }
  } 
  const getPlaces = async () => {
    const data = await getAll("all");
    if (data) {
      setAllPlaces([...data]);
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
  const getFeatured = async () => {
    const data = await getAll("featured");
    if (data) {
    setFeatured([...data]);
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
    getFeatured();
    getPlaces();
  }, []);

    return(
        <>
          <HomeTemplate 
            accommodation={accommodation}
            adventures={adventures}
            experiences={experiences}
            features={features}
            allPlaces={allPlaces}
           />
        </> 
    )
}

export default HomePage;
