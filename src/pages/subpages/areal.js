import * as React from 'react';
import '../../styles/pages/areal.scss'
import '../../styles/global.scss'
import { Fragment, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Media from 'react-media'

import Header from '../../components/header';
import Footer from '../../components/footer';

import videoMp4 from '../../../assets/video.mp4';
import image from '../../../assets/trate_hero.png'
import mapaFoto from '../../../assets/mapa.png'

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
                <img className="hero-image max-height" src={image} alt="Ski slope" />

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
            <section>
                <section ref={ref} className="section section-bottom" >
                    {/* <h1 className="big-title title-white" >
                    Sezóna 2020-21! <br />
                    Těšíme se&nbsp;na&nbsp;Vás
                </h1> */}
                    <img src={mapaFoto} alt="Mapa Ski Karlov" style={{ width: '90%', maxWidth: '1500px' }} />
                </section>
            </section>
            <section className="section section-text section-trate">
                <h2>Sjezdové tratě</h2>
                <div className="areal-main">
                    <h2 className="header">Celková délka sjezdovek</h2> <h2 className="data"><strong>2&nbsp;450&nbsp;metrů</strong></h2>
                    <h2 className="header">Převýšení</h2> <h2 className="data"><strong>160&nbsp;metrů</strong></h2>
                    {/* <h2 className="header">Zasněžování</h2> <h2 className="data"><strong>ANO</strong></h2> */}
                    {/* //?keep this out */}
                </div>
                <div className="trat blue">
                    <h2 className="trat-title">FAMILY</h2>
                    <p>Jedná se o&nbsp;nejdelší sjezdovku karlovského údolí. Je určena začátečníkům a&nbsp;všem, kdo&nbsp;vyhledávají klidné a&nbsp;pohodové lyžování.
                         První částí trasy od&nbsp;horní stanice vede kolem lesa snow park. Vyberte si svou cestu!</p>
                </div>
                <div className="trat blue">
                    <h2 className="trat-title">Pod lesem</h2>
                    <p>Sjezdová trať Pod lesem má svůj vlastní vlek typu Poma. Je dlouhá 200&nbsp;metrů a&nbsp;je určena pro&nbsp;děti a&nbsp;začínající lyžaře. Pohodový trénink!</p>
                </div>
                <div className="trat blue">
                    <h2 className="trat-title">Myšáček</h2>
                    <p>Sjezdová trať pro nejmenší je součástí lyžařské školy. Délka 50&nbsp;metrů, obslužnost lanovým vlekem a&nbsp;poznávací znamení – hemžení malých, rychlých i&nbsp;méněrychlých lyžaříčků!</p>
                </div>
                <div className="trat red">
                    <h2 className="trat-title">FIS</h2>
                    <p>Trať FIS má délku 650&nbsp;metrů. Už mnoho let se&nbsp;na&nbsp;této sjezdovce jezdí lyžařské závody. V&nbsp;roce 2012 byla rozšířena a&nbsp;upravena. Vzhůru dolů po&nbsp;červené!</p>
                </div>
                <div className="trat red">
                    <h2 className="trat-title">FAMILY</h2>
                    <p>Sjezdová trať Rukáv vznikla při&nbsp;modernizaci a&nbsp;úpravách areálu v&nbsp;roce 2012. Jde&nbsp;o&nbsp;červenou závodní sjezdovku, služebně nejmladší, o&nbsp;celkové délce 700m. Tohle už&nbsp;si&nbsp;žádá zkušenosti!</p>
                </div>
            </section>
            <section className="section section-map">
                <iframe aria-hidden="true" frameborder="0" tabindex="-1"
                    style={{ zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', border: 'none' }}
                >
                </iframe>
            </section>
            {/* TODO kontakt */}
        </main>
        <Footer />
    </Fragment >
}