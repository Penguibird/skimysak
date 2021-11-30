import * as React from 'react';
import '../styles/pages/pocasi.scss';
import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import { Fragment, useState, useEffect } from 'react';
import useSWR from 'swr';
import { getTemp, getImg, getSymbol, compareDates } from '../components/weatherFunctions';
import WeatherCard from '../components/weatherCard'

import { StaticImage } from "gatsby-plugin-image";
import { WeatherApiResponse } from '../types/weatherApiResponse';

export default function Page(props) {

    let ref = React.useRef();

    const fetcher = (...args) => fetch.apply(null, args).then(res => res.json())
    const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=50.018461&lon=17.295048' // process.env.WEATHER_API_URL;
    const { data, error }: { data?: WeatherApiResponse.RootObject, error?: unknown } = useSWR<WeatherApiResponse.RootObject>(url, fetcher);

    if (error) console.error(error)
    let timeseriesByDays: WeatherApiResponse.Timesery[][] = [];
    if (data) {
        const dataByDaysInterstep = Object.entries(
            data.properties.timeseries.reduce((acc: { [key: string]: WeatherApiResponse.Timesery[] }, obj: WeatherApiResponse.Timesery) => { //.sort(compareDates)
                let key = new Date(obj.time).getMonth() * 100 + new Date(obj.time).getDate() + '';
                if (!acc[key]) {
                    acc[key] = []
                }
                acc[key].push(obj)
                return acc;
            }, {}));
        timeseriesByDays = dataByDaysInterstep
            .sort(([keyA, _a], [keyB, _b]) => Number.parseInt(keyA) - Number.parseInt(keyB))
            .map(([key, val]) => val);

    }
    // console.log("databydays", dataByDays);

    return <Fragment>
        <Helmet>
            <title>Počasí | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header mainSectionRef={ref} />
        <main>
            <section className="section-hero-image section">
                <StaticImage formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/servis.jpg' imgClassName="hero-image" className="hero-image" alt='Sjezdovka' layout='fullWidth' />
                <h1 className="title-white small">Počasí</h1>
            </section>
            <section className="section-predpoved section-background" ref={ref}>
                <div className="my-row">
                    {error ? <div className="error">Error</div>
                        : !data
                            ? <div className="loading">Loading</div>
                            : timeseriesByDays.slice(0, 3).map((timeseries: WeatherApiResponse.Timesery[], i) => <WeatherCard key={i} title={i == 0 ? "dnes" : i == 1 && "zítra"} data={timeseries} />)}
                </div>
                <div className="super-row">
                    <div className="my-row">
                        {error ? <div className="error">Error</div>
                            : !data
                                ? <div className="loading">Loading</div>
                                : timeseriesByDays.slice(3, 5).map((timeseries: WeatherApiResponse.Timesery[], i) => <WeatherCard key={i + 3} data={timeseries} />)}
                    </div>
                    <div className="my-row">
                        {error ? <div className="error">Error</div>
                            : !data
                                ? <div className="loading">Loading</div>
                                : timeseriesByDays.slice(5, 7).map((timeseries: WeatherApiResponse.Timesery[], i) => <WeatherCard key={i + 5} data={timeseries} />)}
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </Fragment>
}