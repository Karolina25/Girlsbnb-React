import React, { useState } from 'react';
import './index.css';

const SearchHome = ({className, allPlaces}) => {
  const [word, setWord] = useState('')
  const [arriveDate, setArriveDate] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [people, setPeople] = useState(0)

  const handleInput = (e) => {
    const keyword = e.target.value;      
    setWord(keyword)
    console.log(word)
  }
  
  const handleInputArrivalDate = (e) => {
    const keyword = e.target.value;      
    setArriveDate(keyword)
  }

  const handleInputDepartureDate = (e) => {
    const keyword = e.target.value;      
    setDepartureDate(keyword)
  }

  const handleInputDevelopers = (e) => {
    const keyword = e.target.value;      
    setPeople(keyword)
  }

  const handleSearch = () => {
    console.log(allPlaces);
    console.log("word", word)
    const dataFilterCountry= (word.length > 0) ? allPlaces.filter((e)=> e.country===word) : allPlaces
    const dataFilterDates= (arriveDate.length > 0 && departureDate.length > 0) ? 
    dataFilterCountry.filter((data) => (new Date(arriveDate) >= new Date(data.start_date) && new Date(departureDate) <= new Date(data.end_date)))
    :dataFilterCountry
    console.log(dataFilterCountry)
    console.log(dataFilterDates)
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
      <input  onChange={handleInputDevelopers}  type="number" placeholder='1' className='input-search'></input>
      <div className='container-bnSearch'>
        <button className='bn-search' onClick={handleSearch}>Search</button>
      </div>
    </div>
    )
}

export default SearchHome;
