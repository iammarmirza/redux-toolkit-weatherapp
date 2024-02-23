import { useSelector, useDispatch } from 'react-redux'
import { API_KEY, BASE_URL } from "../utils/constants"
import { addWeather, changeText } from '../features/weather/weatherSlice'

export const WeatherInput = () => {
    const text = useSelector(state => state.text)
    const dispatch = useDispatch()

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`${BASE_URL}&q=${text}&appid=${API_KEY}`)
            const _data = await response.json()
            dispatch(addWeather(_data))

            if (!response.ok) {
                throw new Error('Something bad happened')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter' && text !== '') fetchWeatherData()
    }

    const handleSearchButton = () => {
        if (text !== '') fetchWeatherData()
    }

    return (
        <div className="input-container flex flex-row items-center gap-3 mt-5">
            <input
                type="text"
                placeholder="Enter the city name"
                className="search-bar p-2 rounded-xl w-64 shadow-md shadow-blue-800"
                value={text}
                onChange={(e) => dispatch(changeText(e.currentTarget.value))}
                onKeyDown={(e) => handleEnterKey(e)}
            />
            <button
                onClick={handleSearchButton}
                className="search-button bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 shadow-md shadow-blue-800">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}