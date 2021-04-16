import * as React from 'react';
import '../styles/pages/areal.scss'
import '../styles/global.scss'
import { Fragment, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
// import Media from 'react-media'

import Header from '../components/header';
import Footer from '../components/footer';


import { StaticImage } from 'gatsby-plugin-image';

export default function Contact(props) {
    let ref = React.useRef();

    return <Fragment>
        <Helmet>
            <title>Sjezdovky | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header mainSectionRef={ref} />
        <main>
            <section className="section-hero-image section">
                <StaticImage formats={["jpg", "webp"]} placeholder="blurred" className="hero-image" imgClassName="hero-image" src='../../assets/trate_hero.png' alt="Sjezdovka" layout='fullWidth' />

                <div className="flexbox-column main-title-wrap">
                    <h1 className="big title-white hero-image-title">
                        Lyžování na Myšáku
                    </h1>
                    <a className="scroll-down" href="#mainSection">
                        <svg width="50" height="25" viewBox="0 0 50 25" className="custom-svg">
                            <line x1="5" x2="25" y1="5" y2="20" />
                            <line x1="45" x2="25" y1="5" y2="20" />
                        </svg>
                    </a>
                </div>
            </section>

            <section ref={ref} className="section section-text section-trate">
                <h2>Sjezdové tratě</h2>

                <div className="areal-main">
                    <h2 className=" header">Celková délka sjezdovek</h2>
                    <h2 className=" data">2&nbsp;450&nbsp;metrů</h2>
                </div>

                <div className="trate-wrapper" style={{ marginTop: '0' }}>
                    <div className="trat-image">
                        <StaticImage formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/iko_Family.jpg' alt="ikona trate" layout='constrained' />
                    </div>
                    <p><strong>Jedná se o&nbsp;nejdelší sjezdovku karlovského údolí</strong>. Je určena začátečníkům a&nbsp;všem, kdo&nbsp;vyhledávají klidné a&nbsp;pohodové lyžování.
                První částí trasy od&nbsp;horní stanice vede kolem lesa <strong>snow park</strong>. Vyberte si svou cestu!</p>

                    <div className="trat-image">
                        <StaticImage formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/iko_Pod-lesem.jpg' alt="ikona trate" layout='constrained' />
                    </div>
                    <p><strong>Sjezdová trať Pod lesem</strong> má svůj vlastní vlek typu Poma. <strong>Je dlouhá 200&nbsp;metrů</strong> a&nbsp;je určena pro&nbsp;děti a&nbsp;začínající lyžaře. Pohodový trénink!</p>

                    <div className="trat-image">
                        <StaticImage formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/iko_Mysacek.jpg' alt="ikona trate" layout='constrained' />
                    </div>
                    <p><strong>Sjezdová trať pro nejmenší</strong> je součástí lyžařské školy. <strong>Délka 50&nbsp;metrů,</strong> obslužnost lanovým vlekem a&nbsp;poznávací znamení – hemžení malých, rychlých i&nbsp;méněrychlých lyžaříčků!</p>

                    <div className="trat-image">
                        <StaticImage formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/iko_FIS.jpg' alt="ikona trate" layout='constrained' />
                    </div>
                    <p><strong>Trať FIS měří 650&nbsp;metrů.</strong> Už mnoho let se&nbsp;na&nbsp;této sjezdovce jezdí <strong>lyžařské závody</strong>. V&nbsp;roce 2012 byla rozšířena a&nbsp;upravena. Vzhůru dolů po&nbsp;červené!</p>

                    <div className="trat-image">
                        <StaticImage formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/iko_Rukav.jpg' alt="ikona trate" layout='constrained' />
                    </div>
                    <p><strong>Sjezdová trať Rukáv</strong> vznikla při&nbsp;modernizaci a&nbsp;úpravách areálu v&nbsp;roce 2012. Jde&nbsp;o&nbsp;červenou závodní sjezdovku, služebně nejmladší, <strong>o&nbsp;celkové délce 700m. Tohle už&nbsp;si&nbsp;žádá zkušenosti!</strong></p>
                </div>

                <div className="areal-main" style={{ marginTop: '0' }}>
                    <h2 className=" header">Převýšení</h2>
                    <h2 className=" data">160&nbsp;metrů</h2>
                </div>
            </section>

            <section ref={ref} className="section section-background section-bottom" id="mainSection" style={{ padding: '0px' }}>
                <StaticImage formats={["jpg", "webp"]}
                    // placeholder="blurred" 
                    src='../../assets/mapa.png' alt="Mapa Ski Karlov" style={{ width: '90%', maxWidth: '1500px', height: 'auto' }}
                    // imgStyle={{ width: '90%', maxWidth: '1500px' }} 
                    objectFit='contain'
                    layout='constrained' />


            </section>
        </main>
        <Footer />
    </Fragment >
}