import classes from "./weather-card.module.scss";
import { useContext, useState } from "react";
import { CityDataContext } from "../util/weather-context";
import { IWeatherAll } from "../interface/weather.type";
import { TimeFormatter } from "../util/time-formatter";
export default function WeatherCard() {
  const data = useContext(CityDataContext);
  const listArr = [
    "Humandity",
    "Wind speed",
    "Wind direction",
    "Visibility",
    "Sunrise",
    "Sunset",
  ];
  const [cardlist, setCardList] = useState(listArr);
  return (
    <>
      {data ? (
        <>
          <div className={classes.box}>
            {/* {cardlist.map((value,index)=>{
            return<div className={classes.card}>
                {value}
            </div>
        })} */}
            <div className={classes.card}>
              <span>Humandity</span>
              <div className={classes.detail}>{data.main.humidity}%</div>
            </div>
            <div className={classes.card}>
              <span>Wind speed</span>
              <div className={classes.detail}>
                {data.wind.speed}
                <span className={classes.unit}>m/s</span>
              </div>
            </div>
            <div className={classes.card}>
              <span>coordination </span>
              <div className={classes.coord}>
                lat {data.coord.lat.toFixed(2)}
              </div>
              <div className={classes.coord}>
                lon {data.coord.lon.toFixed(2)}
              </div>
            </div>
            <div className={classes.card}>
              <span>Visibility</span>
              <div className={classes.detail}>
                {(data.visibility / 1000).toFixed(2)}
                <span className={classes.unit}>km</span>
              </div>
            </div>
            <div className={classes.card}>
              <span>Sunrise</span>
              <div className={classes.detail}>
                {TimeFormatter(data.sys.sunrise)}
              </div>
            </div>
            <div className={classes.card}>
              <span>Sunset</span>
              <div className={classes.detail}>
                {TimeFormatter(data.sys.sunset)}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
