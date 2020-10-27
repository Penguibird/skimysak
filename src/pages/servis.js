import * as React from 'react';
import css from '../styles/servis.scss';
import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import { Fragment, useState, useEffect } from 'react';

export default function page(props) {

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
                    {/* TODO: Servis webpage */}
                </p>
            </h1>
        </main>
        <Footer />
    </Fragment>
}