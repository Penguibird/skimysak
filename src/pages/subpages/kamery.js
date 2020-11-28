import * as React from 'react';
import '../../styles/pages/kamery.scss';
import '../../styles/global.scss';

import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';

export default function page(props) {
    let ref = React.useRef();

    return <Fragment>
        <Helmet>
            <title>Kamery | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <main className="kamery">
            <Header mainSectionRef={ref} always/>
                <section ref={ref} className="section-hero-image section">
                <h1 className="title-white">Kamery</h1>
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