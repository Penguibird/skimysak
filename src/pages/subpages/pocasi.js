import * as React from 'react';
import '../../styles/pages/pocasi.scss';
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
import useSWR from 'swr';

export default function Page(props) {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const url = process.env.WEATHER_API_URL;
    const { data, error } = useSWR(url, fetcher);
    const compareDates = (a, b) => {
        let now = new Date();
        return Math.abs(new Date(a.time).getTime() - now.getTime()) - Math.abs(new Date(a.time).getTime() - now.getTime())
    }
    const getTemp = (data) => data.timeseries.sort(compareDates)[0].data.instant.details.air_temperature;

    return <Fragment>
        <Helmet>
            <title>Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            <h1>
                <p>
                    {/*     TODO: pocasi webpage */}
                </p>
            </h1>
        </main>
        <Footer />
    </Fragment>
}