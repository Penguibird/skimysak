import * as React from 'react';
import { Link } from 'gatsby';
import '../../styles/pages/aktualityPage.scss';
import '../../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
import zahajeniSezony from '../../../assets/zahajeniSezony.jpg';

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

                <h2>ZAČÍNÁME V PÁTEK 🏂</h2>
                <p className="date">5.12.2020</p>
                <p>Ski&nbsp;Aréna Karlov otevře sezónu v&nbsp;pátek 18.&nbsp;prosince 2020 v&nbsp;8.30 hodin. Lyžovat se bude i&nbsp;v&nbsp;sobotu a&nbsp;v&nbsp;neděli (další provoz upřesníme). K&nbsp;dispozici bude modrá 💙sjezdovka Family u&nbsp;čtyřsedadlové lanovky Myšák 🐭 a&nbsp;jedna ze&nbsp;sjezdovek u&nbsp;čtyřsedadlové lanovky Karlov Ski&nbsp;Express, kde&nbsp;bude i&nbsp;večerní lyžování. Lyžuje se&nbsp;na&nbsp;technickém sněhu.
                Skipasy je&nbsp;možno zakoupit v&nbsp;předstihu (a&nbsp;o&nbsp;něco levněji, než na&nbsp;místě) na <a href="https://eshop.skikarlov.cz">eshop.skikarlov.cz</a>.
                </p>
                <p>Otevřena bude i&nbsp;půjčovna a&nbsp;lyžařská škola. Občerstvení bude poskytováno pouze přes okénko s&nbsp;tím, že&nbsp;není umožněno nabízet alkoholické nápoje určené ke&nbsp;konzumaci na&nbsp;místě.
                Nástup na&nbsp;čtyřsedačkovou lanovku bude organizován tak, aby mezi jednotlivými lyžaři, kteří nejsou členy jedné domácnosti, byly zachovány předepsané rozestupy.</p>
                <p>
                    Samozřejmostí je&nbsp;ochrana nosu a&nbsp;úst 😊 rouška, kukla, šátek...), lyžařské rukavice a&nbsp;již několik let z důvodu bezpečnosti doporučujeme i lyžařskou helmu⛑. Těšíme se&nbsp;na&nbsp;Vás a&nbsp;předem děkujeme za&nbsp;respektovaní nastavených pravidel, za&nbsp;spolupráci a&nbsp;sdílení této informace. 👍</p>
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