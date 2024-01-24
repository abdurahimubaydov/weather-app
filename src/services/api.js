import axios from "axios";

export const WeatherService = {
    async getWeather(lat, lon, api_key) {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
        return data
    },

    async searchBycity(city_name, api_key) {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)

        return data
    },

    async fiveDaysApi(lat, lon, api_key) {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)

        return data
    }
}