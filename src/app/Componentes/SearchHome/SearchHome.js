import React from 'react';
import './index.css';

const SearchHome = () => {
    return (
        <div className='container-search'>
            <p className='title-search'>Book unique accommodations to code as never before</p>
            <p className='label-search'>where</p>
            <input type="text" placeholder='Everywhere' className='input-search'></input>
            <div className='display-flex'>
                <p className='label-search input-half'>Arrival</p>
                <p className='label-search input-half'>Departure</p>
            </div>
            <input type="date" placeholder='dd / mm / yyyy' className='input-search input-arrival'></input>
            <input type="date" placeholder='dd / mm / yyyy' className='input-search input-departure'></input>
            <p className='label-search'>Developers</p>
            <input type="number" placeholder='1' className='input-search'></input>
            <div className='container-bnSearch'>
                <button className='bn-search'>Search</button>
            </div>
        </div>
    )
}

export default SearchHome;
