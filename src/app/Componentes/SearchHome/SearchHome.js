import React from 'react';
import './index.css';

const SearchHome = ({className}) => {
    return (
        <div className={`container-search ${className}`}>
            <p className='title-search'>Book unique accommodations to code as never before</p>
            <label className='label-search'>where</label>
            <input type="text" placeholder='Everywhere' className='input-search'></input>
            <div className='display-flex'>
                <label className='label-search input-half'>Arrival</label>
                <label className='label-search input-half'>Departure</label>
            </div>
            <input type="date" placeholder='dd / mm / yyyy' className='input-search input-arrival'></input>
            <input type="date" placeholder='dd / mm / yyyy' className='input-search input-departure'></input>
            <label className='label-search'>Developers</label>
            <input type="number" placeholder='1' className='input-search'></input>
            <div className='container-bnSearch'>
                <button className='bn-search'>Search</button>
            </div>
        </div>
    )
}

export default SearchHome;
