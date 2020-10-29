import * as React from 'react';
import '../../styles/pages/areal.scss'
import '../../styles/global.scss'
import { Fragment, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import Header from '../../components/header';
import Footer from '../../components/footer';

import image from '../../../assets/servis.jpg'

export default function Contact(props) {

    return <Fragment>
        <Helmet>
            <title>Sjezdovky | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            <section className="section-hero-image section">
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width:999px)",
                    large: "(min-width: 1000px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.large
                                ? <video className="hero-image" muted autoPlay loop  >
                                    <source src={videoMp4} type="video/mp4" />
                                    {/* <source src={image} type="image/jpg" media={"all"} /> */}
                                </video>
                                : <img className="hero-image" src={image} alt="Ski slope" />
                            }
                        </Fragment>
                    )}
                </Media>
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
            <section className="section section-text section-areal-main">
                <div className="areal-main">
                    <h2>Celková délka sjezdovek <strong>2 450 metrů	</strong></h2>
                    <h2>Převýšení <strong>160 metrů	</strong></h2>
                    <h2>Zasněžování <strong>ANO	</strong></h2>
                </div>
            </section>
            <section className="section section-text section-trate">
                <h2>
                    Sjezdové tratě

                </h2>
                <div className="trat blue">
                    <h2 className="trat-title">FAMILY</h2>
                    <p>Sjezdová trať FAMILY je se svými 1 100 metry délky objektivně nejdelší sjezdovkou v karlovském údolí.
                        Jde o příjemnou a nenáročnou sjezdovku pro pro ty, kdo si chtějí užít klidné a pohodové lyžování.</p>
                </div>
                <div className="trat blue">
                    <h2 className="trat-title">Pod lesem</h2>
                    <p>Sjezdová trať Pod lesem má svůj vlastní vlek typu Poma. Je dlouhá 200 metrů a je určena pro děti a začínající lyžaře.</p>
                </div>
                <div className="trat blue">
                    <h2 className="trat-title">Myšáček</h2>
                    <p>Sjezdová trať pro ty nejmenší. Součást lyžařské školy. Délka 50 metrů, obslužnost lanovým vlekem.</p>
                </div>
                <div className="trat red">
                    <h2 className="trat-title">FIS</h2>
                    <p>Sjezdová trať FIS má délku 650 metrů. Už mnoho let se na této sjezdovce jezdí lyžařské závody. V roce 2012 byla trať rozšířena a upravena do současné podoby.</p>
                </div>
                <div className="trat red">
                    <h2 className="trat-title">FAMILY</h2>
                    <p>Sjezdová trať Rukáv je služebně nejmladší tratí, která vznikla při modernizaci a úpravách areálu v roce 2012. Jde o červenou závodní sjezdovku.</p>
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