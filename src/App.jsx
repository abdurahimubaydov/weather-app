import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import axios from 'axios'


const App = () => {
  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState('')
  const weatherApi = 'ec86fc63db3487dbf466d94919acc3e7'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location.length === 0 ? 'bukhara' : ''}&appid=ec86fc63db3487dbf466d94919acc3e7`

  const callApi = () => {
    // this function getting data from api
    axios.get(URL)
    .then(res => setWeather(res.data))
  }

  useEffect(() => callApi(), [])

  const searchLocation = e => {
    // this function search location from api
    if (e.key === 'Enter') {
      setWeather({})
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ec86fc63db3487dbf466d94919acc3e7`)
      .then(res => {
        setWeather(res.data)
        setLocation('')
      })
      .catch(err => {
        alert(' not found\n enter your location true\n Weather location changed in Bukhara')
        setLocation('')
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=bukhara&appid=ec86fc63db3487dbf466d94919acc3e7`)
        .then(res => setWeather(res.data))
      })
    }
  }

  console.log(URL)

  return (
    <div>
      <div className="weather-app-section">
        <div className="weather-card">
          <Header 
            location={location}
            setLocation={setLocation}
            searchLocation={searchLocation}
            weather={weather}
          /> 
          <Body weather={weather} />
        </div>  
      </div>
    </div>
  )
}

export default App