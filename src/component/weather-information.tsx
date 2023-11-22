import WeatherCard from './weather-card'
import WeatherHeader from './weather-header'
import classes from './weather-information.module.scss'
export default function Weatherinformation(){
    return(<div className={classes.content}>
            <WeatherHeader/>
            <WeatherCard/>
        </div>)
}