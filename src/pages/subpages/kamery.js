import * as React from 'react';
import '../../styles/pages/kamery.scss';
import '../../styles/global.scss';

import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';

import image from '../../../assets/servis.jpg'
export default function page(props) {

    return <Fragment>
        <Helmet>
            <title>Kamery | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <main className="kamery">
            <Header />
                <section className="section-hero-image section">
                {/* //TODO Jsou kamery dobry nazev? Webkamery? */}
                <h1>Kamery</h1>
                <img className="hero-image" src={image} alt="Ski slope" />
                <section className="section section-kamery" >
                    <div className="kamera-wrapper">
                        <h2>Myšák horní stanice</h2>
                        <iframe
                            // width="560" height="315"
                            src="https://www.youtube.com/embed/bPit2mgDTUA"
                            frameborder="0" autoplay="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="kamera-wrapper">
                        <h2>Myšák spodní stanice</h2>
                        <iframe
                            // width="560" height="315"
                            src="https://www.youtube.com/embed/wOjL_ET86Yo"
                            frameborder="0" autoplay="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </section>
            </section>
        </main>
        <Footer />
    </Fragment>
}