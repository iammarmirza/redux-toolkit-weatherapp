import { IMAGES } from "../utils/constants"
import { useSelector } from 'react-redux'

export const MoreInfo = ({variant}) => {
  const windspeed = useSelector(state => state.weatherData.windspeed)
  const humidity = useSelector(state => state.weatherData.humidity)
  const imageSrc = `../${IMAGES[variant]}.png`
  const infoType = variant === 'humidity' ? "Humidity" : 'Wind Speed'
  const infoText = variant === 'humidity' ? humidity : windspeed

    return (
        <div className="more-info flex flex-row gap-3 items-center">
      <img src={imageSrc} className="w-12 h-12" />
      <div className="more-info-text flex flex-col text-white">
        <p className="text-3xl font-semibold">{infoText}</p>
        <p className="text-xl">{infoType}</p>
      </div>
    </div>
    )
}