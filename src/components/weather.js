import * as React from 'react';
import '../styles/components/weather.scss'
import { Fragment, useState, useEffect } from 'react';
import { Link } from "gatsby";
// import * as icons from "../../assets/weatherIcons.mjs";
import useSWR from 'swr';
import { getTemp, getImg } from './weatherFunctions';
import { StaticImage } from "gatsby-plugin-image";


export default function Weather(props) {
    // const [weather, setWeather] = useState();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=50.018461&lon=17.295048' // process.env.WEATHER_API_URL;
    const { data, error } = useSWR(url, fetcher);

    if (error) console.log({ url, data, error });
    if (error) return <div className="widget weather-widget error">
        <p>error</p>
    </div>
    if (!data) return <div className="widget weather-widget loading">
        <p>loading</p>
    </div>

    return <Link to="/pocasi" className="widget weather-widget widget"  >
        <StaticImage                 transformOptions={{ outputPixelDensities: [0.05, 0.1, 0.15, 0.25, 0.5, 1, 2] }}
aspectRatio={1} width={250} className="bckgrnd-image" src='../../assets/pocasi_test.jpg' alt='Ikona skipasy' layout='constrained' />

        <div class="flexbox-column">
            <img src={getImg(data)} />
            <h2 className="weather-title widget-title">
                {`${getTemp(data)} °C`}
            </h2>
        </div>

    </Link>
}
