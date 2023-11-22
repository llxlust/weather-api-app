import axios from "axios";
import { IWeatherAll } from "../interface/weather.type";
const apiKey = import.meta.env.WEATHER_API_KEY
export default function useApiEndpoint(){
        const getWeatherByCity = (cityName: string) => {
        console.log(cityName)
        return axios.get<IWeatherAll>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=939331614a46dc1ed6d75ac3f10ff99c`);
    }
    return{
        getWeatherByCity
    }
}

