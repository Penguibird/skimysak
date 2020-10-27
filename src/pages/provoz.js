import * as React from 'react';
// import '../styles/pages/provoz.scss'
import { Fragment, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import Header from '../components/header';
import Footer from '../components/footer';

export default function Provoz(props) {

    return <Fragment>
        <Helmet>
            <title>Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            {/*     // TODO: provoz */}
        </main>
        <Footer />
    </Fragment>
}