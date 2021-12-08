import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import '../styles/pages/aktualityPage.scss';
import '../styles/global.scss';

import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import Aktualita from '../components/aktualita'
import { StaticImage } from "gatsby-plugin-image";
import useAktuality from '../hooks/useAktuality';

const imageProps = {
    placeholder: 'blurred',
    objectPosition: 'top',
    // height: 
    // aspectRatio
    formats: ["jpg", "webp"],
    imgStyle: { maxHeight: '250px', objectPosition: 'top' },
    style: { maxHeight: '250px' },
    layout: 'constrained',
}

const getShortText = (s: string) => {
    if (s.length < 203)
        return s;

    return s.slice(0, 200) + "...";
}

export default function Page(props) {
    const aktuality = useAktuality();
    return <Fragment>
        <Helmet>
            <title>Aktuality | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main className="aktuality">
            <section className="section-hero-image section" style={{ paddingBottom: '0px' }}>
                <h1 >Aktuality</h1>
                {/* <img className="hero-image" src={image} alt="Ski slope" /> */}
            </section>
            <section className="section-page-aktuality">
                {aktuality.map((akt, i) =>
                    <Aktualita
                        key={i}
                        title={akt.title}
                        date={akt.date}
                        url={akt.url}
                        rawText={getShortText(akt.text)}
                        data={akt.image.image}
                        alt={akt.image.imageAlt}
                    />
                )}
            </section>
        </main>
        <Footer />
    </Fragment >
}