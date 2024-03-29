import * as React from 'react';
// import Media from "react-media";
import '../styles/pages/obcerstveni.scss';
import '../styles/global.scss';
import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import { Fragment, useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Page(props) {
    return <Fragment>
        <Helmet>
            <title>Občerstvení | Ski myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header  />
        <main>
            <section className="section-hero-image section" style={{ paddingTop: '5em', paddingBottom: '7em' }}>

          
                <StaticImage formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/jidlo_hero.jpg' alt='Horky napoj na horach' className="hero-image" imgClassName="hero-image" imgStyle={{
                    filter: "brightness(0.85)",
                    top: '-10%'
                }} layout='fullWidth' />

                <div className="flexbox-column main-title-wrap">
                    <h1 className="big-title title-white hero-image-title small">
                        Skvělé jídlo na&nbsp;Myšáku!
                        </h1>
                </div>
            </section>
            <section className="section section-text">
                <h2>To&nbsp;nejlepší místo na&nbsp;pauzu!</h2>

                <p>Bistro na&nbsp;Myšáku nabízí příjemné posezení s&nbsp;výhledem na&nbsp;lanovku a&nbsp;kvalitní domácí kuchyni pro&nbsp;děti i&nbsp;dospělé.
                V&nbsp;denním menu najdete tradiční českou kuchyni, smažené rychlovky a&nbsp;neodolatelnou specialitu – jesenické borůvkové knedlíky.
                    K&nbsp;tomu teplé i&nbsp;čepované, alkoholické nebo&nbsp;nealkoholické nápoje, výbornou kávu, domácí moučníky a&nbsp;fantastické palačinky!</p>

                <p>Ze&nbsp;Ski Baru pod&nbsp;Myšákem a&nbsp;přilehlé terasy sledujete pohyb přímo na&nbsp;sjezdovce a&nbsp;vidíte i&nbsp;na&nbsp;nejmenší lyžaře.
                    Stavte se&nbsp;posedět nad&nbsp;výbornou kávou, alkoholickými nebo&nbsp;nealkoholickými drinky a&nbsp;dejte si&nbsp;něco na&nbsp;zub.</p>

            </section>
            <section className="section section-text section-spacer">
                <p></p>
            </section>
        </main>
        <Footer />
    </Fragment>
}