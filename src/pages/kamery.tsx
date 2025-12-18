import * as React from 'react';
import '../styles/pages/kamery.scss';
import '../styles/global.scss';

import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import { Fragment, useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Page(props) {
    // let ref = React.useRef();

    
    return <Fragment>
        <Helmet>
            <title>Kamery | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header always />
        <StaticImage src="../../assets/trate_hero.png" alt='' layout='fullWidth' style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, position: 'absolute'}} />

        <main className="kamery">
            <section className="section-hero-image section">
                <h1 className="title-white">Kamery</h1>
                <section className="section section-kamery" >
                    <div className="kamera-wrapper">
                        <h2>Myšák horní stanice</h2>
                        <iframe
                            // width="560" height="315"
                            src="https://www.youtube.com/embed/oIn6QY5AgR8"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="kamera-wrapper">
                        <h2>Myšák dolní stanice</h2>
                        <iframe
                            // width="560" height="315"
                            src="https://www.youtube.com/embed/kgZEsvqRpn8"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </section>
            </section>
        </main>
        <Footer />
    </Fragment>
}