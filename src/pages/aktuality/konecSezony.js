import * as React from 'react';
import { Link } from 'gatsby';
import '../../styles/pages/aktualityPage.scss';
import '../../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';

export default function page(props) {
    let ref = React.useRef();
    return <Fragment>
        <Helmet>
            <title>Konec Sezóny 2020/21 | Aktuality | Ski Myšák</title>
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

                <h2>Konec Sezóny 2020/21</h2>
                <p className="date">15.11.2020</p>
                <p>Letošní sezóna nadělila kupy sněhu, ale k&nbsp;tomu taky hromady omezení. Nezbývá, než se&nbsp;těšit na&nbsp;NOVOU, příští, lepší. Buďte zdraví, všichni příznivci Ski&nbsp;arény Karlov, moc se&nbsp;na&nbsp;Vás těšíme 🙂</p>
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