import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "../slicers/weather"

export default configureStore({
    reducer: {
        weather: WeatherSlice,
    },
    devTools: process.env.NODE_ENV === 'development',
})