import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: '',
    weatherData: {
        city: 'Location not found',
        temperature: 'Search for a Location',
        humidity: 'N/A',
        windspeed: 'N/A',
        status: 'Clear'
    },
    isSearched: false
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload
        },
        addWeather: (state, action) => {
            if (action.payload && action.payload.cod !== '404') {
                const data = {
                    city : action.payload.name,
                    temperature : `${Math.round(action.payload.main?.temp)}°C`,
                    humidity : `${action.payload.main?.humidity}%`,
                    windspeed : `${action.payload.wind?.speed} km/h`,
                    status : action.payload.weather[0].main
                }
                state.weatherData = data
            } else {
                state.weatherData = initialState.weatherData
            }
            state.text = ''
            state.isSearched = true
        }
    }
})

export const { changeText, addWeather } = weatherSlice.actions
export default weatherSlice.reducer