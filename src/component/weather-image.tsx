import { TempFormatter } from "../util/temp-formatter";
import { CityDataContext } from "../util/weather-context";
import classes from "./weather-image.module.scss";
import { useContext,useState } from "react";
export default function WeatherImage() {
  const data = useContext(CityDataContext);
  const iconcode = data?.weather[0].icon
  const imageUrl = "https://openweathermap.org/img/wn/" + iconcode + "@2x.png";
  return (
    <>
      <div className={classes.content}>
        {data ? (
          <>
            <div className={classes.name}>{data.name}, {data.sys.country}</div>
            <div className={classes.desc}>{data.weather[0].description}</div>
            <img src={imageUrl}></img>
            <div className={classes.temp}>{(data.main.temp - 273.5).toFixed(0)}°C</div>
            <div className={classes.feels}>Feels like {(data.main.feels_like - 273.5).toFixed(0)}°C</div>
          </>
        ) : (
          <>No data</>
        )}
      </div>
    </>
  );
}
