import * as React from 'react';
import '../../styles/pages/contact.scss'
import { Fragment, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import Header from '../../components/header';
import Footer from '../../components/footer';

import image from '../../../assets/servis.jpg'

export default function Contact(props) {

    return <Fragment>
        <Helmet>
            <title>Napište nám | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            <section className="section-hero-image section">
                <h1>Napište nám</h1>
                <img className="hero-image" src={image} alt="Ski slope" />
            </section>
            <section className="section section-kontakt">
                <h2>
                    Kontakt
                </h2>
                <div className="kontakt-wrapper">
                    <div className="kontakt-section">
                        <h4 className="kontakt-section-title">Ski areál Myšák</h4>
                        <div className="kontakt">
                            <h5 className="kontakt-title">
                                Jaroslav Lukeš</h5>
                            <p><i>ředitel areálu</i></p>
                            <p>Mobil: <strong>777 745 370</strong></p>
                            <p>Email: <strong>lukes@skimysak.cz</strong></p>
                        </div>
                        <div className="kontakt">
                            <h5 className="kontakt-title">
                                Boris Keka</h5>
                            <p><i>mediální zástupce</i></p>
                            <p>Mobil: <strong> 777 728 086</strong></p>
                            <p>Email: <strong>boris@moveup.cz</strong></p>
                        </div>
                    </div>
                    <div className="kontakt-section">
                        <h4 className="kontakt-section-title">Lyžařská škola Myšák</h4>
                        <div className="kontakt">
                            <h5 className="kontakt-title">
                                Informace a objednávky</h5>
                            <p>Mobil: <strong>734 824 493</strong></p>
                            <p>Email: <strong>skola@skimysak.cz</strong></p>
                        </div>
                    </div>
                    <div className="kontakt-section">
                        <h4 className="kontakt-section-title">Půjčovna a&nbsp;ski servis</h4>
                        <div className="kontakt">
                            <h5 className="kontakt-title">
                                Informace a objednávky</h5>
                            <p>Mobil: <strong> 734 358 181</strong></p>
                        </div>
                        {/* TODO: Add the rest of the info */}
                    </div>
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