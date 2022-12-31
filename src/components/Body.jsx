import React from 'react'
import {BsSnow} from'react-icons/bs'

const Body = ({weather}) => {
  const title = weather ? weather.name : ''
  const weatherType = weather.weather ?  weather.weather[0].main : null
  const wind = weather.wind && weather.wind.speed
  const humidity = weather.main && weather.main.humidity
  const temperature = weather.main && weather.main.temp
  return (
    <div>
      {!weather ? (
        <h1>loading</h1>
      ) : (
        <div className="body-section">
        <h2>Weather in {weather ? weather.name : ''} </h2>
        <h1>
          {temperature}°C  
          <BsSnow 
            style={{
              marginLeft: '10px'
            }} 
          />
        </h1> 
        <span 
          style={{
            marginTop: '20px'
          }}
        >{weatherType}</span>
        <span>Humidity: {humidity}%</span>
        <span>Wind speed: {wind}km/h</span>
      </div>
      )}
    </div>
  )
}

export default Body