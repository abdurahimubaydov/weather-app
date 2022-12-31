import React, {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


const Header = ({searchLocation, setLocation, location, weather}) => {
  return (
    <header className='header-section'>
        <div className={`lds-dual-ring ${weather.name ? '' : 'active'}`}></div>
        <span className='search-icon'>
          <AiOutlineSearch />
        </span>
        <input 
          type={'text'}
          placeholder='enter your location'
          onInput={e => setLocation(e.target.value)}
          value={location}
          onKeyPress={searchLocation}
        />
    </header>
  )
}

export default Header