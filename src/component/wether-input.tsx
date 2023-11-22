import classes from './weather-input.module.scss'
import {useContext, useState} from 'react'
import { CityDataContext, SeachCityContent } from '../util/weather-context'
interface IWeatherInput{

}
export default function WeatherInput(){
   const setCityName = useContext(SeachCityContent)
   const [inputData,setInputData] = useState<string>("")

 return(<>
    <input className={classes.input}type="text" onChange={(e)=>{setCityName(e.target.value)}}></input>
 </>)
}