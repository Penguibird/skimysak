import * as React from 'react';
import { Link } from 'gatsby';
import '../../styles/pages/aktualityPage.scss';
import '../../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
import infoKonec from '../../../assets/infoKonec.jpg';

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

                <h2>NOVÉ INFORMACE O PROVOZU</h2>
                <p className="date">23.12.2020</p>
                <p>
                    Od&nbsp;27.&nbsp;prosince 2020 budou všechny lyžařské areály uzavřeny z&nbsp;důvodu přechodu na&nbsp;5.&nbsp;stupeň PES. Ski&nbsp;Aréna Karlov bude do&nbsp;té&nbsp;doby nabízet všechny své&nbsp;služby (viz&nbsp;obrázek). Děkujeme za&nbsp;podporu, za&nbsp;spolupráci a&nbsp;respektování nastavených pravidel.
                </p><p>
                    Dvoukotva Kazmarka se&nbsp;už&nbsp;letos nespustí, kolemjdoucím je&nbsp;k&nbsp;dispozici okénko v&nbsp;"kulaté" restauraci.
                </p>
                <img src={infoKonec} alt="tabulka s informacemi" className="aktuality-img" />
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