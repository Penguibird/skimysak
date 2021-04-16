import * as React from 'react';
import '../styles/components/weather.scss'
import { Fragment, useState, useEffect } from 'react';
import { Link } from "gatsby";
// import * as icons from "../../assets/weatherIcons.mjs";
import useSWR from 'swr';
import { getTemp, getImgm, compareDates } from './weatherFunctions';
import { StaticImage } from "gatsby-plugin-image";
import loadingImage from '../../assets/weatherIcons/cloudy.png';

import cloudy from '../../assets/weatherIcons/cloudy.png';
import partly_cloudy_day from '../../assets/weatherIcons/partly_cloudy_day.png';
import partly_cloudy_night from '../../assets/weatherIcons/partly_cloudy_night.png';
import rain_and_snow from '../../assets/weatherIcons/rain_and_snow.png';
import rain_heavy from '../../assets/weatherIcons/rain_heavy.png';
import rain_light from '../../assets/weatherIcons/rain_light.png';
import snow_heavy from '../../assets/weatherIcons/snow_heavy.png';
import snow_light from '../../assets/weatherIcons/snow_light.png';
import sunny_day from '../../assets/weatherIcons/sunny_day.png';
import sunny_night from '../../assets/weatherIcons/sunny_night.png';

const getSymbol = (symbolCode) => {
    if (symbolCode.includes("heavyrain")) return rain_heavy
    if (symbolCode.includes("sleet")) return rain_and_snow
    if (symbolCode.includes("heavysnow")) return snow_heavy
    if (symbolCode.includes("rain")) return rain_light
    if (symbolCode.includes("snow")) return snow_light
    if (symbolCode.includes("cloudy") || symbolCode.includes("fog")) return cloudy

    var date = new Date();
    if (date.getHours() > 22 || date.getHours() < 6) {
        //its night
        if (symbolCode.includes("clearsky")) return sunny_night
        if (symbolCode.includes("fair")) return partly_cloudy_night
    } else {
        //its day
        if (symbolCode.includes("clearsky")) return sunny_day
        if (symbolCode.includes("fair")) return partly_cloudy_day
    }
    console.error("There is no icon for symbol code:", symbolCode)
    return cloudy;
}


export default function Weather(props) {
    // const [weather, setWeather] = useState();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=50.018461&lon=17.295048' // process.env.WEATHER_API_URL;
    const { data, error } = useSWR(url, fetcher);

    // if (error) console.log({ url, data, error });

    // if (!data) return <div className="widget weather-widget loading">
    //     <p>loading</p>
    // </div>

    return <Fragment>
        <h2 className="weather-title widget-title">
            {data ? `${getTemp(data)} °C`
                : error ? "Weather" : "Weather"}
        </h2>
        <div class="flexbox-column" style={{
            margin: 'auto',
            width: '75%',
            marginTop: '-110%',
            top: 0,
        }}>
            <img className="weather-icon" src={data ? getSymbol(data.properties.timeseries.sort(compareDates)[0].data.next_1_hours.summary.symbol_code) : loadingImage} width={125} height={120} alt="Ikona pocasi" />
        </div>
    </Fragment >

}
