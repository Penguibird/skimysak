import * as React from 'react';
import { Link } from 'gatsby';
import '../../styles/pages/aktualityPage.scss';
import '../../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
import informace from '../../../assets/informace.jpg';

export default function Page(props) {
    let ref = React.useRef();
    return <Fragment>
        <Helmet>
            <title>ZAČÍNÁME V PÁTEK | Aktuality | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header mainSectionRef={ref} always />
        <main className="main-aktualita-text">
            <section className="section-text section" ref={ref}>
                <Link to="/aktuality" className="back">
                    <svg width="20" height="40" viewBox="0 0 20 45" className="custom-svg">
                        <line x1="3" x2="17" y1="20" y2="37" />
                        <line x1="3" x2="17" y1="20" y2="3" />
                    </svg>
                    <h2>Zpět</h2>
                </Link>

                <h2>Nové vyhlášení o vstupu do ČR</h2>
                <p className="date">17.12.2020</p>
                <p><strong>CZ:</strong> Od&nbsp;18.&nbsp;prosince 2020 je&nbsp;omezen vstup a&nbsp;pohyb cizinců na&nbsp;území&nbsp;ČR. Podmínkou pro&nbsp;umožnění vstupu je&nbsp;negativní výsledek PCR testu. Dále není možné přicestovat za&nbsp;účelem návštěvy přátel či&nbsp;rekreace.
                </p>
                <p><strong>PL:</strong> Informacja Ministerstwa Spraw Wewnętrznych dotycząca ograniczenia wjazdu cudzoziemców do&nbsp;Czech: Do&nbsp;ośrodków narciarskich mają wstęp tylko&nbsp;te&nbsp;osoby, które&nbsp;po&nbsp;przyjeździe do&nbsp;Czech przedstawiły negatywny wynik testu PCR. 
                    Jednocześnie informujemy, że&nbsp;przjazd do&nbsp;Czech w&nbsp;celach turystyczno-rekreacyjnych lub&nbsp;odwiedzin znajomych jest niemożliwy. Regulamin obowiązuje od&nbsp;piątku 18.&nbsp;grudnia 2020 do&nbsp;odwołania.
</p>
                <img src={informace} alt="Sjezdovka" className="aktuality-img" />
                <Link to="/aktuality" className='back center   ' >
                    <svg width="20" height="40" viewBox="0 0 20 40" className="custom-svg">
                        <line x1="3" x2="17" y1="20" y2="37" />
                        <line x1="3" x2="17" y1="20" y2="3" />
                    </svg>
                    <h2>Zpátky na aktuality</h2>
                </Link>
            </section>
        </main>
        <Footer />
    </Fragment >
}