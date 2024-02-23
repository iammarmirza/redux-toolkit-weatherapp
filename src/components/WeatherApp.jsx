import { MoreInfo } from "./MoreInfo"
import { WeatherDetails } from "./WeatherDetails"
import { WeatherInput } from "./WeatherInput"

export const WeatherApp = () => {
    return (
        <div className="main-container flex flex-col items-center bg-blue-900 bg-gradient-to-br from-blue-300 via-green-blue-500 min-h-screen px-4">
            <WeatherInput />
            <WeatherDetails />
            <div className="more-info-container flex flex-row gap-7 mt-14 mb-16">
                <MoreInfo variant='humidity' />
                <MoreInfo variant='wind_speed' />
            </div>
        </div>
    )
}