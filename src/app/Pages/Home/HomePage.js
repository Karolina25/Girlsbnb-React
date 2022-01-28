import React, {useState, useEffect} from "react";
import HomeTemplate from "../../Templates/HomeTemplate/HomeTemplate";
import {getAll} from "../../../data/api/ApiService";

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
  
    return(
          <HomeTemplate accommodation={accommodation} />
    )
}

export default HomePage;
