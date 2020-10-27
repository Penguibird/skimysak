import * as React from 'react';
import css from '../styles/components/weather.scss'
import { Fragment, useState, useEffect } from 'react';
import { Link } from "gatsby";
import snowing from "../../assets/snowing.png";
import useSWR from 'swr'


export default function Weather(props) {
    // const [weather, setWeather] = useState();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=50.018461&lon=17.295048' // process.env.WEATHER_API_URL;
    const { data, error } = useSWR(url, fetcher);
    const compareDates = (a, b) => {
        let now = new Date();
        return Math.abs(new Date(a.time).getTime() - now.getTime()) - Math.abs(new Date(a.time).getTime() - now.getTime())
    }
    const getTemp = (data) => {
        console.log(data)
        return data.properties.timeseries.sort(compareDates)[0].data.instant.details.air_temperature;
    }

    const getImg = (data) => {
        return snowing
        // TODO: imgs
    }
    if (error) console.log({ url, data, error });
    if (error) return <div className="weather-widget error">
        <p>error</p>
        // TODO: error and loading
    </div>
    if (!data) return <div className="weather-widget loading">
        <p>loading</p>
    </div>

    return <Link to="/pocasi" className="weather-widget widget"  >
        <h2 className="weather-title widget-title">
            {`${getTemp(data)} °C`}
        </h2>
        <img src={getImg(data)} />

    </Link>
}
