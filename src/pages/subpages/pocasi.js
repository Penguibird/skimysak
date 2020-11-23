import * as React from 'react';
import '../../styles/pages/pocasi.scss';
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
import useSWR from 'swr';
import { getTemp, getImg, getSymbol, compareDates } from '../../components/weatherFunctions';
import WeatherCard from '../../components/weatherCard'

import image from '../../../assets/servis.jpg'

export default function Page(props) {
    //todo den posunuty o jedno
    //todo horni tri jsou divne

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=50.018461&lon=17.295048' // process.env.WEATHER_API_URL;
    const { data, error } = useSWR(url, fetcher);

    if (error) console.error(error)
    let dataByDays = [];
    if (data) {
        dataByDays = Object.values(data.properties.timeseries.sort(compareDates).reduce((acc, obj) => {
            let key = new Date(obj.time).getDate();
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(obj)
            return acc;
        }, {}));

        //     (prevVal, currVal, i) => {
        //     console.log("data", prevVal, currVal);
        //     if (i == 0) dataByDays.push([prevVal])
        //     if (new Date(prevVal.time).getDate() == new Date(currVal.time).getDate()) {
        //         dataByDays[dataByDays.length - 1].push(currVal)
        //     } else {
        //         dataByDays.push([currVal]);
        //     }
        // })
    }
    console.log("databydays", dataByDays);

    return <Fragment>
        <Helmet>
            <title>Ski Myšák | Počasí</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            {/* TODO: pocasi webpage */}
            <section className="section-hero-image section">
                {/* TODO Find a nice weather related hero image here */}
                <img className="hero-image" src={image} alt="Ski slope" />
                <h1 className="title-white small">Počasí</h1>
            </section>
            {/* <section className="section-aktualni-pocasi section-background">
                <div className="aktualni-pocasi">
                    <h2 className="card-title">
                        //? Include this
                    </h2>
                </div>
            </section>  */}
            <section className="section-predpoved section-background">
                <div className="row">
                    {error ? <div className="error">Error</div>
                        : !data
                            ? <div className="loading">Loading</div>
                            : dataByDays.slice(0, 3).map((data, i) => <WeatherCard key={i} title={i == 0 ? "dnes" : i == 1 && "zítra"} data={data} />)}
                </div>
                <div className="super-row">
                    <div className="row">
                        {error ? <div className="error">Error</div>
                            : !data
                                ? <div className="loading">Loading</div>
                                : dataByDays.slice(3, 5).map((data, i) => <WeatherCard key={i + 3} data={data} />)}
                    </div>
                    <div className="row">
                        {error ? <div className="error">Error</div>
                            : !data
                                ? <div className="loading">Loading</div>
                                : dataByDays.slice(5, 7).map((data, i) => <WeatherCard key={i + 5} data={data} />)}
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </Fragment>
}