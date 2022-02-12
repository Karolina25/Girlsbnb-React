import React, { useEffect, useState } from 'react';
import { getAll } from '../../../data/api/ApiService';
import './index.css';

const SearchHome = ({className, allPlaces}) => {
  const [word, setWord] = useState(null)
  const [arriveDate, setArriveDate] = useState(null)
  const [departureDate, setDepartureDate] = useState(null)

  const handleInput = (e) => {
    const keyword = e.target.value;      
    setWord(keyword)
  }
  
  const handleInputArrivalDate = (e) => {
    const keyword = e.target.value;      
    setArriveDate(keyword)
  }

  const handleInputDepartureDate = (e) => {
    const keyword = e.target.value;      
    setDepartureDate(keyword)
  }

  const handleSearch = () => {
    console.log(allPlaces);
    console.log(word)
    let filtrado= allPlaces.filter((e)=> e.country===word)
    console.log(arriveDate)
    console.log(departureDate)
    console.log(filtrado)
  }
  
  return (
    <div className={`container-search ${className}`}>
      <p className='title-search'>Book unique accommodations to code as never before</p>
      <label className='label-search'>where</label>
      <input type="text" placeholder='Everywhere' className='input-search' onChange={handleInput}></input>
      <div className='display-flex'>
        <label className='label-search input-half'>Arrival</label>
        <label className='label-search input-half'>Departure</label>
      </div>
      <input onChange={handleInputArrivalDate} type="date" placeholder='dd / mm / yyyy' className='input-search input-arrival'></input>
      <input onChange={handleInputDepartureDate} type="date" placeholder='dd / mm / yyyy' className='input-search input-departure'></input>
      <label className='label-search'>Developers</label>
      <input type="number" placeholder='1' className='input-search'></input>
      <div className='container-bnSearch'>
        <button className='bn-search' onClick={handleSearch}>Search</button>
      </div>
    </div>
    )
}

export default SearchHome;
