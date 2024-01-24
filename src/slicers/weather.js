import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather: null,
    loading: false,
    forecast: null,
    loadingForecast: false
}


const weatherSLice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeatherStart: state => {
            state.loading = true
        },

        getWeatherSuccess: (state, action) => {
            state.loading = false
            state.weather = action.payload
        },

        geForecastStart: state => {
            state.loadingForecast = true
        },

        getForecastSuccess: (state, action) => {
            state.loadingForecast = false
            state.forecast = action.payload
        },

        getError: state => {
            state.loadingForecast = false
            state.loading = false
        }
    }
})


export const { getWeatherStart,
    getWeatherSuccess,
    geForecastStart,
    getForecastSuccess,
    getError
} = weatherSLice.actions
export default weatherSLice.reducer