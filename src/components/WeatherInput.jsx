import { useDispatch, useSelector } from 'react-redux'
import { changeText, fetchWeather } from '../features/weather/weatherSlice'

export const WeatherInput = () => {
    const dispatch = useDispatch()
    const text = useSelector(state => state.text)

    const handleEnterKey = (e) => {
        if (e.key === 'Enter' && text !== '') dispatch(fetchWeather(text))
    }

    const handleSearchButton = () => {
        if (text !== '') dispatch(fetchWeather(text))
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