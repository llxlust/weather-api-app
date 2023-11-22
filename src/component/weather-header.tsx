import classes from './weather-header.module.scss'
import {useContext} from 'react'
import WeatherInput from './wether-input'
import { CityDataContext } from '../util/weather-context'
import { DateFormatter } from '../util/date-formatter'
export default function WeatherHeader(){
    const data = useContext(CityDataContext)
    return<div className={classes.header}>
        <div>{data ? DateFormatter(data.dt) : <></>}</div>
        <WeatherInput/>
    </div>
}