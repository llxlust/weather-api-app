import {createContext} from 'react'
import { IWeatherAll } from '../interface/weather.type'

export const CityDataContext = createContext<IWeatherAll | null>(null)
export const SeachCityContent = createContext((cityName:string)=>{})
//export const CurrentStatusContext = createContext<number | null>(null)