import { useSelector } from 'react-redux'
import { IMAGES } from '../utils/constants'

export const WeatherDetails = () => {
    const location = useSelector(state => state.weatherData.city)
    const temp = useSelector(state => state.weatherData.temperature)
    const isSearched = useSelector(state => state.isSearched)
    const status = useSelector(state => state.weatherData.status)
    
    return (
        <>
            { isSearched === true && <div className='flex items-center gap-3 mt-5 text-2xl text-white'><i className="fa-solid fa-location-dot"></i><span>{location}</span></div>}
            <img src={`../${IMAGES[status]}.png`} className="w-64 h-64 mb-8" />
            <div className="temperature-text text-white text-5xl font-bold text-center">
                {temp}
            </div>
        </>
    )
}