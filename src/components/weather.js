import * as React from 'react';
import '../styles/components/weather.scss'
import { Fragment, useState, useEffect } from 'react';
import { Link } from "gatsby";
// import * as icons from "../../assets/weatherIcons.mjs";
import useSWR from 'swr';
import { getTemp, getImg } from './weatherFunctions';
import { StaticImage } from "gatsby-plugin-image";
import loadingImage from '../../assets/weatherIcons/cloudy.png';

export default function Weather(props) {
    // const [weather, setWeather] = useState();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=50.018461&lon=17.295048' // process.env.WEATHER_API_URL;
    const { data, error } = useSWR(url, fetcher);

    // if (error) console.log({ url, data, error });
    // if (error) return <div className="widget weather-widget error">
    //     <p>error</p>
    // </div>
    // if (!data) return <div className="widget weather-widget loading">
    //     <p>loading</p>
    // </div>

    return <div class="flexbox-column" style={{
        top: 0,
        marginTop: '-90%'
    }}>
        <img src={data ? getImg(data) : loadingImage} width={125} height={120} alt="Ikona pocasi" />
        <h2 className="weather-title widget-title">
            {data ? `${getTemp(data)} °C`
                : error ? "Err" : "Load"}
        </h2>
    </div>

}
