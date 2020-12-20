import * as React from 'react';
import { Link } from 'gatsby';
import '../../styles/pages/aktualityPage.scss';
import '../../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
import doKonceRoku from '../../../assets/do_konce_roku.jpg';

export default function page(props) {
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

                <h2>⛷ LYŽUJEME KAŽDÝ DEN DO KONCE ROKU 🏂</h2>
                <p className="date">20.12.2020</p>
                <p>...&nbsp;s&nbsp;výjimkou Štědrého dne&nbsp;🎄 (24.&nbsp;12.). Od&nbsp;8:30 do 16&nbsp;hodin. V&nbsp;provozu půjčovna, servis&nbsp;🛠 i&nbsp;lyžařská škola (rezervace a&nbsp;objednávky na&nbsp;čísle&nbsp;734&nbsp;824&nbsp;493). Občerstvení&nbsp;🥪🧃 přes&nbsp;okénko.</p>

                <p>Samozřejmostí je&nbsp;ochrana nosu a&nbsp;úst 😊 rouška, kukla, šátek...). Těšíme se&nbsp;na&nbsp;Vás a&nbsp;předem děkujeme za&nbsp;respektovaní nastavených pravidel, za&nbsp;spolupráci a&nbsp;sdílení této informace. 👍</p>
                <img src={zahajeniSezony} alt="Sjezdovka" className="aktuality-img" />
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