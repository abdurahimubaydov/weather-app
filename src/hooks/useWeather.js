import { WeatherService } from '../services/api';
import useLocation from './useLocation';
import { API_KEY } from '../helpers/api-helpers';
import { useDispatch } from 'react-redux';
import {
    getWeatherStart,
    getWeatherSuccess,
    geForecastStart,
    getForecastSuccess,
    getError
} from '../slicers/weather';

export default function useWeather() {

    const dispatch = useDispatch()

    const { myLocation } = useLocation()



    const getWeather = async () => {
        dispatch(getWeatherStart())
        try {
            const res = await WeatherService.getWeather(myLocation.latitude, myLocation.longitude, API_KEY)
            dispatch(getWeatherSuccess(res))
        } catch (error) {
            console.error(error)
        }
    }

    const getFiveDays = async () => {
        dispatch(geForecastStart())
        try {
            const { list } = await WeatherService.fiveDaysApi(myLocation.latitude, myLocation.longitude, API_KEY)

            dispatch(getForecastSuccess(list.slice(0, 5)))
        } catch (error) {
            console.error(error)
        }

    }


    const searchFiveDaysForecast = async (e, city_name) => {
        e.preventDefault()
        dispatch(geForecastStart())
        try {
            const { list } = await WeatherService.searchBycityForecast(city_name, API_KEY)
            dispatch(getForecastSuccess(list.slice(0, 5)))
        } catch (error) {
        }
    }



    const searchByCity = async (e, city_name) => {
        e.preventDefault()
        dispatch(getWeatherStart())
        try {
            const res = await WeatherService.searchBycity(city_name, API_KEY)
            searchFiveDaysForecast(e, city_name)
            dispatch(getWeatherSuccess(res))
        } catch (error) {
            alert('Please enter the right city')
            getWeather()
            dispatch(getError())
        }
    }

    return { getWeather, searchByCity, getFiveDays, searchFiveDaysForecast }
}
