import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL, API_KEY } from '../../utils/constants'

const initialState = {
    text: '',
    weatherData: {
        city: 'Location not found',
        temperature: 'Search for a Location',
        humidity: 'N/A',
        windspeed: 'N/A',
        status: 'Clear'
    },
    isSearched: false,
    isLoading: false
}

export const fetchWeather = createAsyncThunk('fetchWeather', async (text) => {
    const response = await fetch(`${BASE_URL}&q=${text}&appid=${API_KEY}`)
    return response.json()
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weatherData = {
                city: action.payload.name,
                temperature: `${Math.round(action.payload.main.temp)}°C`,
                humidity: `${action.payload.main.humidity}%`,
                windspeed: `${action.payload.wind.speed} km/h`,
                status: action.payload.weather[0].main
            };
            state.isLoading = false;
            state.isSearched = true;
        })
        builder.addCase(fetchWeather.rejected, (state) => {
            state.weatherData = initialState.weatherData
        })
    }
})

export const { changeText } = weatherSlice.actions
export default weatherSlice.reducer