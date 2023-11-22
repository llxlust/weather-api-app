import { useEffect, useState } from "react";
import classes from "./weather-container.module.scss";
import WeatherImage from "./weather-image";
import Weatherinformation from "./weather-information";
import useApiEndpoint, { getWeatherByCity } from "../util/weather-endpoint";
import { IWeatherAll } from "../interface/weather.type";
import { CityDataContext, SeachCityContent } from "../util/weather-context";
export default function WeatherContainer() {
  const [weatherData, setWeatherData] = useState<IWeatherAll | null>(null);
  const [inputCity, setInputcity] = useState<string>("");
  const {getWeatherByCity} = useApiEndpoint();

  const fetchData = async (cityName:string) => {
    try{
      const { data } = await getWeatherByCity(cityName)
      setWeatherData(data);
    }catch(err){
      console.log(err)
    }
  }
useEffect(()=>{
  if(inputCity){
    fetchData(inputCity)
  }
},[inputCity])
  const cityNameHandler = (cityName:string) => {
    setInputcity(cityName)
  }
  console.log(inputCity)
  return (
    <div className={classes.bg}>
      <div className={classes.card}>
          <CityDataContext.Provider value={weatherData}>
            <SeachCityContent.Provider value={cityNameHandler}>
                <WeatherImage />
                <Weatherinformation />
            </SeachCityContent.Provider>
          </CityDataContext.Provider>
      </div>
    </div>
  );
}
